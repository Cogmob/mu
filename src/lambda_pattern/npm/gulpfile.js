'use strict';

// imports for all files
var ERR = require('async-stacktrace');
var word_wrap = require('word-wrap');
var webpack = require('webpack-stream');
var node_externals = require('webpack-node-externals');
var insert = require('gulp-insert');
var footer = require('gulp-footer');
var gulp = require('gulp');
var replace = require('gulp-replace');
var sequence = require('gulp-sequence');
var babel = require('gulp-babel');
var debug = require('gulp-debug');
var continuation = require('gulp-continuation');
var vmap = require('vinyl-map');
var S = require('string');
var fs = require('fs');
var yaml = require('js-yaml').safeLoad;

var module_map = yaml(fs.readFileSync(__dirname + '/lambda_pattern/module_map.yaml', 'utf8'));

var add_includes = function add_includes(ret, map) {
    var re = /[^a-zA-Z0-9]\.\. [-a-zA-Z0-9_]+/g;
    var imports = [];
    var m;
    do {
        m = re.exec(ret);
        if (m) {
            imports.push(m[0].substring(4));
        }
    } while (m);
    if (imports.length > 0) {
        var imports_string = '// load jspm\n';
        for (var i in imports) {
            ret = ret.replace('.. ' + imports[i], imports[i]);
            if (!imports_string.includes('require(\'' + imports[i])) {
                imports_string += '// const ' + imports[i];
                imports_string += ' = jspm.require(\'';
                imports_string += module_map[imports[i]] + '\');\n';
            }
        }
        ret = imports_string + ret;
    }
    return ret;
};

var add_local_includes = function add_local_includes(ret, map) {
    var re = /[^a-zA-Z0-9]\. [a-zA-Z0-9\.\_][-a-zA-Z0-9\.\_\/]*/g;
    var imports = [];
    var m;
    do {
        m = re.exec(ret);
        if (m) {
            imports.push(m[0].substring(3));
        }
    } while (m);
    if (imports.length > 0) {
        var imports_string = '// load local\n';
        for (var i in imports) {
            var varname = '__' + imports[i].replace(/\W/g, '');
            ret = ret.replace('. ' + imports[i], varname);
            if (!imports_string.includes(imports[i])) {
                imports_string += 'const ' + varname;
                imports_string += ' = require(\'./' + imports[i] + '\');\n';
            }
        }
        ret = imports_string + ret;
    }
    return ret;
};

gulp.task('tools_es6', function () {
    return gulp.src(['tools/*.es6']).pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n')).pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n')).pipe(insert.prepend('// imports for all files\n')).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(replace(/\[filename\]/g, 'lambda_pattern')).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(word_wrap(err.stack.replace(/\\\\/g, \'\\\\ \'), {\n                trim: true,\n                width: 80})\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));\n            t.fail();\n            return t.end();}\n        ')).pipe(gulp.dest('.')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('tools'));
});

gulp.task('es6', function () {
    return gulp.src(['lambda_pattern/**/*.es6', '!**/expected/**', '!**/node_modules/**', '!**/*_data/**/*']).pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n')).pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n')).pipe(insert.prepend('// imports for all files\n')).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(vmap(function (code, filename) {
        var ret = code.toString() + '//a';
        filename = filename.split('.');
        filename = filename[filename.length - 2];
        filename = filename.split('\\');
        var last = filename.length - 1;

        var name = filename[last];
        ret = S(ret).replaceAll('[file' + 'name]', name).s;
        var module = filename[last - 1];
        ret = S(ret).replace('[mod' + 'ule]', module).s;

        if (!ret.includes('module.exports') && ret.includes('const _ =')) {
            ret += '\nmodule.exports = _;';
        }

        ret = add_includes(ret, module_map);
        ret = add_local_includes(ret, module_map);
        return ret;
    })).pipe(vmap(function (code, filename) {
        return code.toString();
    })).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(word_wrap(err.stack.replace(/\\\\/g, \'\\\\ \'), {\n                trim: true,\n                width: 80})\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));\n            t.fail();\n            return t.end();}\n        ')).pipe(gulp.dest('lambda_pattern')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('lambda_pattern'));
});

gulp.task('main_file', function () {
    return gulp.src('lambda_pattern/lambda_pattern.js').pipe(footer('\nif (!module.parent) {\n    lambda_pattern(function (er) {\n        if (er) {\n           console.log(er.toString());\n        }\n    });\n}')).pipe(gulp.dest('.'));
});

gulp.task('backup_gulpfile', function () {
    return gulp.src('lambda_pattern/npm/gulpfile.js').pipe(gulp.dest('../../../src/lambda_pattern/npm'));
});

gulp.task('build_updatables', function () {
    return gulp.src('lambda_pattern/updatables/_.js').pipe(webpack({
        externals: [node_externals()],
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'shebang' }] },
        node: {
            __filename: false,
            __dirname: false },
        output: {
            filename: '_.js',
            libraryTarget: 'commonjs2',
            library: true },
        target: 'node' })).pipe(gulp.dest('../../release/updatables'));
});

gulp.task('build_lambda_pattern_tool', function () {
    return gulp.src('lambda_pattern/bin.js').pipe(webpack({
        externals: [/^[a-z\/\-0-9]+$/i],
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'shebang' }] },
        node: {
            __filename: false,
            __dirname: false },
        output: { filename: 'bin.js' },
        target: 'node' })).pipe(insert.prepend('#!/usr/bin/env node\n\n')).pipe(gulp.dest('../../release'));
});

gulp.task('copy_skel_to_parent', function () {
    return gulp.src(['lambda_pattern/skeleton_data/**/*', 'lambda_pattern/skeleton_data/**/.*']).pipe(gulp.dest('skeleton_data'));
});

gulp.task('copy_skel_to_release', function () {
    return gulp.src(['lambda_pattern/skeleton_data/**/*', 'lambda_pattern/skeleton_data/**/.*']).pipe(gulp.dest('../../release/skeleton_data'));
});

gulp.task('copy_yaml_to_release', function () {
    return gulp.src(['lambda_pattern/shared/default_package_values.yaml', 'lambda_pattern/shared/package_template.json']).pipe(gulp.dest('../../release/lambda_pattern/shared'));
});

gulp.task('copy_main_to_release', function () {
    return gulp.src(['lambda_pattern/_.js']).pipe(gulp.dest('../../release'));
});

gulp.task('copy_ignore_to_release', function () {
    return gulp.src('lambda_pattern/.gitignore').pipe(gulp.dest('../../release'));
});

gulp.task('copy_src', function () {
    return gulp.src('../../../src/**/*').pipe(gulp.dest('.'));
});

gulp.task('build', sequence('copy_skel_to_parent', 'es6', 'tools_es6', 'main_file', 'backup_gulpfile', 'build_updatables', 'build_lambda_pattern_tool', 'copy_ignore_to_release', 'copy_main_to_release', 'copy_skel_to_release', 'copy_yaml_to_release'));
//a
/* Generated by Continuation.js v0.1.7 */