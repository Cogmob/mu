const webpack = require('webpack-stream');
const node_externals = require('webpack-node-externals');
const insert = require('gulp-insert');
const footer = require('gulp-footer');
const gulp = require('gulp');
const replace = require('gulp-replace');
const sequence = require('gulp-sequence')
const babel = require('gulp-babel');
const debug = require('gulp-debug');
const continuation = require('gulp-continuation');
const vmap = require('vinyl-map');
const S = require('string');
const fs = require('fs');
const yaml = require('js-yaml').safeLoad;
const strip = require('gulp-strip-comments');

var module_map = yaml(
    fs.readFileSync('lambda_pattern/module_map.yaml', 'utf8'));

const add_module = (code, imports_code, assign_code, alias_code, key) => {
    var modname = key;

    var mod_varname = 'module_' + key.replace(/[^a-zA-Z0-9_]/g, '');
    var varname = 'import_' + modname;
    var ext = null;

    if (key in module_map) {
        modname =  module_map[key][0];
        mod_varname = 'module_' + modname.replace(/[^a-zA-Z0-9_]/g, '');
        if (module_map[key].length > 1) {
            ext = module_map[key][1];
            varname += ext.replace(/[^a-zA-Z0-9_]/g, '');
            code = code.replace('.. ' + key, varname);
        } else {
            code = code.replace('.. ' + key, mod_varname);}
    } else {
        code = code.replace('.. ' + key, mod_varname);}

    const require_string = `jspm.import('${modname}')`;
    if (!imports_code.includes(require_string)) {
        imports_code += '    ' + require_string + ',\n';}

    var assign_string = `${mod_varname}`;
    if (!assign_code.includes(assign_string)) {
        assign_code += '    ' + assign_string + ',\n';}

    if (ext) {
        const alias_string = `const ${varname} = ${mod_varname}.${ext};`;
        if (!alias_code.includes(alias_string)) {
            alias_code += '    ' + alias_string + '\n';}}

    return [code, imports_code, assign_code, alias_code];}

const add_includes = (ret, map) => {
    var re = /(^|[^a-zA-Z0-9])\.\. [-a-zA-Z0-9_]+/g;
    var imports = [];
    var m;
    do {
        m = re.exec(ret);
        if (m) {
            if (m[0][0] === '.') {
                imports.push(m[0].substring(3));
            } else {
                imports.push(m[0].substring(4));}}} while (m);
    var imports_code = '';
    var assign_code = '';
    var alias_code = '';
    if (imports.length > 0) {
        imports_code = '    // load jspm\n';
        for (var i in imports) {
            [ret, imports_code, assign_code, alias_code] = add_module(
                ret, imports_code, assign_code, alias_code, imports[i])}}
    return [ret, imports_code, assign_code, alias_code];}

const add_local_includes = (ret, map, imports_code, assign_code) => {
    const re = /(^|[^a-zA-Z0-9])\. [a-zA-Z0-9\.\_][-a-zA-Z0-9\.\_\/]*/g;
    var imports = [];
    var m;
    do {
        m = re.exec(ret);
        if (m) {
            if (m[0][0] === '.') {
                imports.push(m[0].substring(2));
            } else {
                imports.push(m[0].substring(3));}}} while (m);
    if (imports.length > 0) {
        imports_code += '    // load local\n';
        for (var i in imports) {
            const varname = 'local_include_'
                    + imports[i].replace(/[^a-zA-Z0-9_]/g, '');
            ret = ret.replace('. ' + imports[i], varname);
            const imports_string = `require('./${imports[i]}')`;
            if (!imports_code.includes(imports_string)) {
                imports_code += '    ' + imports_string + ',\n';}
            const assign_string = varname;
            if (!assign_code.includes(assign_string)) {
                assign_code += '    ' + assign_string + ',\n';}}}
    return [ret, imports_code, assign_code];
}

const es6_prefix = `const jspm = eval('require')(
    process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
const q = eval('require')(
    process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
const promises = [
`

const jspm_promise_a = `    // other
    jspm.import('async-stacktrace'),
    jspm.import('word-wrap')];
module.exports = q.all(promises).spread((
`

const jspm_promise_b = `    ERR,
    word_wrap) => {
`

gulp.task('tools_es6', ()=>{
    return gulp.src(['tools/*.es6'])
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
        .pipe(replace(/\[filename\]/g, 'lambda_pattern'))
        .pipe(replace(
            /cont\(.*err.*\).*;/g,
            `$&
            if (ERR(err, cb)) {
                return;}
                `))
        .pipe(replace(
            /const cb = \(err.*\) \=> \{/g,
            `$&
        if (err) {
            console.log(word_wrap(err.stack.replace(/\\\\/g, '\\\\ '), {
                trim: true,
                width: 80})
            .split('\\n').forEach((stack_line) => {
                console.log(stack_line
                    .replace(/\\\\ /g, '\\\\')
                    .replace(/ at/g, '\\nat')
                    .replace(/Error:/g, '\\nError:'));}));
            t.fail();
            return t.end();}
        `)) 
        .pipe(gulp.dest('.'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(continuation())
        .pipe(gulp.dest('tools'));});

gulp.task('es6', ()=>{
    return gulp.src([
            '[project_name]/**/*.es6',
            '!**/expected/**',
            '!**/node_modules/**',
            '!**/*_data/**/*'])
        .pipe(strip())
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
        .pipe(vmap((code, filename) => {
            var code = code.toString();
            filename = filename.split('.');
            filename = filename[filename.length - 2];
            filename = filename.split('\\');
            const last = filename.length - 1

            const name = filename[last];
            code = S(code).replaceAll('[file' + 'name]', name).s;
            const module = filename[last - 1];
            code = S(code).replace('[mod' + 'ule]', module).s;

            if (!code.includes('module.exports') && code.includes('const _ =')) {
                code += '\n    return _;';}
            code += '}).catch((err) => {console.log(err);});\n';

            var imports_code, assign_code, alias_code;
            [code, imports_code, assign_code, alias_code] = add_includes(
                code, module_map);
            [code, imports_code, assign_code]  = add_local_includes(
                code, module_map, imports_code, assign_code);
            return es6_prefix
                + imports_code
                + jspm_promise_a
                + assign_code
                + jspm_promise_b
                + alias_code
                + code;}))
        .pipe(vmap((code, filename) => {
            return code.toString();}))
        .pipe(replace(
            /cont\(.*err.*\).*;/g,
            `$&
            if (ERR(err, cb)) {
                return;}
                `))
        .pipe(replace(
            /const cb = \(err.*\) \=> \{/g,
            `$&
        if (err) {
            console.log(word_wrap(err.stack.replace(/\\\\/g, '\\\\ '), {
                trim: true,
                width: 80})
            .split('\\n').forEach((stack_line) => {
                console.log(stack_line
                    .replace(/\\\\ /g, '\\\\')
                    .replace(/ at/g, '\\nat')
                    .replace(/Error:/g, '\\nError:'));}));
            t.fail();
            return t.end();}
        `)) 
        .pipe(gulp.dest('[project_name]'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(continuation())
        .pipe(gulp.dest('[project_name]'))
        ;});

gulp.task('main_file', ()=>{
    return gulp.src('[project_name]/[project_name].js')
        .pipe(footer(`
if (!module.parent) {
    lambda_pattern(function (er) {
        if (er) {
           console.log(er.toString());
        }
    });
}`))
        .pipe(gulp.dest('.'));});

gulp.task('backup_gulpfile', ()=>{
    return gulp.src('[project_name]/npm/gulpfile.js')
            .pipe(gulp.dest('../../../src/[project_name]/npm'));});

const global_node_dir = process.env['HOME']
    + '/.jspm_global_packages/node_modules';

gulp.task('build_updatables', () => {
    return gulp.src('[project_name]/updatables/_.js')
        .pipe(webpack({
            externals: [node_externals()],
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'shebang'}],},
            node: {
                __filename: false,
                __dirname: false},
            output: {
                filename: '_.js',
                libraryTarget: 'commonjs2',
                library: true},
            resolve: {
                root: global_node_dir},
            target: 'node'}))
        .pipe(gulp.dest('../../release/updatables'));});

gulp.task('build_lambda_pattern_tool', () => {
    console.log(process.env['HOME']);
    return gulp.src('[project_name]/bin.js')
        .pipe(webpack({
            externals: [node_externals()],
            //plugins: [
            //    new webpack.IgnorePlugin(/.*/)],
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'shebang'}]},
            node: {
                __filename: false,
                __dirname: false},
            output: { filename: 'bin.js' },
            resolve: {
                root: global_node_dir},
            target: 'node'}))
        .pipe(insert.prepend('#!/usr/bin/env node\n\n'))
        .pipe(gulp.dest('../../release'));});

gulp.task('copy_skel_to_parent', () => {
    return gulp.src(['[project_name]/skeleton_data/**/*',
            '[project_name]/skeleton_data/**/.*'])
        .pipe(gulp.dest('skeleton_data'));});

gulp.task('copy_skel_to_release', () => {
    return gulp.src(['[project_name]/skeleton_data/**/*',
            '[project_name]/skeleton_data/**/.*'])
        .pipe(gulp.dest('../../release/skeleton_data'));});

gulp.task('copy_yaml_to_release', () => {
    return gulp.src([
            '[project_name]/shared/default_package_values.yaml',
            '[project_name]/shared/package_template.json'])
        .pipe(gulp.dest('../../release/[project_name]/shared'));});

gulp.task('copy_main_to_release', () => {
    return gulp.src([
            '[project_name]/_.js'])
        .pipe(gulp.dest('../../release'));});

gulp.task('copy_ignore_to_release', () => {
    return gulp.src('[project_name]/.gitignore')
        .pipe(gulp.dest('../../release'));});

gulp.task('copy_src', () => {
    return gulp.src('../../../src/**/*')
        .pipe(gulp.dest('.'));});

gulp.task('build', sequence(
    'copy_skel_to_parent',
    'es6',
    'tools_es6',
    'main_file',
    'backup_gulpfile',
    'build_updatables',
    'build_lambda_pattern_tool',
    'copy_ignore_to_release',
    'copy_main_to_release',
    'copy_skel_to_release',
    'copy_yaml_to_release'));

gulp.start('build');
