'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = {
    word_wrap: jspm.import('word-wrap'),
    ERR: jspm.import('async-stacktrace')
};
module.exports = q.all(promises).then(function (jspm_res) {
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

    var add_module = function add_module(code, imports_code, assign_code, key) {
        var modname = key;

        var mod_varname = 'module_' + key.replace(/[^a-zA-Z0-9_]/g, '');
        var varname = 'import_' + modname;
        var ext = null;

        if (key in module_map) {
            modname = module_map[key][0];
            mod_varname = 'module_' + modname.replace(/[^a-zA-Z0-9_]/g, '');
            if (module_map[key].length > 1) {
                code = code.replace('.. ' + key, varname);
                ext = module_map[key][1];
                varname += ext.replace(/[^a-zA-Z0-9_]/g, '');
            } else {
                code = code.replace('.. ' + key, mod_varname);
            }
        } else {
            code = code.replace('.. ' + key, mod_varname);
        }

        var require_string = '    ' + mod_varname + ': jspm.import(\'' + modname + '\'),';
        if (!imports_code.includes(require_string)) {
            imports_code += require_string + '\n';
        }

        var assign_string = '';
        if (ext) {
            assign_string = 'const ' + varname + ' = jspm_res.' + mod_varname + '.' + ext;
        } else {
            var _assign_string = 'const ' + varname + ' = jspm_res.' + mod_varname;
        }

        if (!assign_code.includes(assign_string)) {
            assign_code += assign_string + '\n';
        }

        return [code, imports_code, assign_code];
    };

    var add_includes = function add_includes(ret, map) {
        var re = /(^|[^a-zA-Z0-9])\.\. [-a-zA-Z0-9_]+/g;
        var imports = [];
        var m;
        do {
            m = re.exec(ret);
            if (m) {
                if (m[0][0] === '.') {
                    imports.push(m[0].substring(3));
                } else {
                    imports.push(m[0].substring(4));
                }
            }
        } while (m);
        var imports_code = '';
        var assign_code = '';
        if (imports.length > 0) {
            imports_code = '    // load jspm\n';
            for (var i in imports) {
                var _add_module = add_module(ret, imports_code, assign_code, imports[i]);

                var _add_module2 = _slicedToArray(_add_module, 3);

                ret = _add_module2[0];
                imports_code = _add_module2[1];
                assign_code = _add_module2[2];
            }
        }
        return [ret, imports_code, assign_code];
    };

    var add_local_includes = function add_local_includes(ret, map, imports_code, assign_code) {
        var re = /(^|[^a-zA-Z0-9])\. [a-zA-Z0-9\.\_][-a-zA-Z0-9\.\_\/]*/g;
        var imports = [];
        var m;
        do {
            m = re.exec(ret);
            if (m) {
                if (m[0][0] === '.') {
                    imports.push(m[0].substring(2));
                } else {
                    imports.push(m[0].substring(3));
                }
            }
        } while (m);
        if (imports.length > 0) {
            var imports_string = '    // load local\n';
            for (var i in imports) {
                var varname = 'local_include_' + imports[i].replace(/[^a-zA-Z0-9_]/g, '');
                ret = ret.replace('. ' + imports[i], varname);
                if (!imports_string.includes(imports[i])) {
                    var _imports_string = '    ' + varname + ': require(\'./' + imports[i] + '\'),' + '\n';
                    if (!imports_code.includes(assign_string)) {
                        imports_code += _imports_string;
                    }
                    var assign_string = 'const ' + varname + ' = jspm_res.' + varname + ';' + '\n';
                    if (!assign_code.includes(assign_string)) {
                        assign_code += assign_string;
                    }
                }
            }
        }
        return [ret, imports_code, assign_code];
    };

    var es6_prefix = 'const jspm = eval(\'require\')(\n    process.env[\'HOME\'] + \'/.jspm_global_packages/node_modules/jspm/api.js\');\nconst q = eval(\'require\')(\n    process.env[\'HOME\'] + \'/.jspm_global_packages/node_modules/q/q.js\');\njspm.setPackagePath(process.env[\'HOME\'] + \'/.jspm_global_packages\');\nconst promises = {\n    word_wrap: jspm.import(\'word-wrap\'),\n';

    var jspm_promise = 'ERR: jspm.import(\'async-stacktrace\')\n};\nmodule.exports = q.all(promises).then((jspm_res) => {\n';

    gulp.task('tools_es6', function () {
        return gulp.src(['tools/*.es6']).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(replace(/\[filename\]/g, 'lambda_pattern')).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(word_wrap(err.stack.replace(/\\\\/g, \'\\\\ \'), {\n                trim: true,\n                width: 80})\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));\n            t.fail();\n            return t.end();}\n        ')).pipe(gulp.dest('.')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('tools'));
    });

    gulp.task('es6', function () {
        return gulp.src(['lambda_pattern/**/*.es6', '!**/expected/**', '!**/node_modules/**', '!**/*_data/**/*']).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(vmap(function (code, filename) {
            var code = code.toString();
            filename = filename.split('.');
            filename = filename[filename.length - 2];
            filename = filename.split('\\');
            var last = filename.length - 1;

            var name = filename[last];
            code = S(code).replaceAll('[file' + 'name]', name).s;
            var module = filename[last - 1];
            code = S(code).replace('[mod' + 'ule]', module).s;

            if (!code.includes('module.exports') && code.includes('const _ =')) {
                code += '\n    return _;';
            }
            code += '\n});\n';

            var imports_code, assign_code;

            var _add_includes = add_includes(code, module_map);

            var _add_includes2 = _slicedToArray(_add_includes, 3);

            code = _add_includes2[0];
            imports_code = _add_includes2[1];
            assign_code = _add_includes2[2];

            var _add_local_includes = add_local_includes(code, module_map, imports_code, assign_code);

            var _add_local_includes2 = _slicedToArray(_add_local_includes, 3);

            code = _add_local_includes2[0];
            imports_code = _add_local_includes2[1];
            assign_code = _add_local_includes2[2];

            return es6_prefix + imports_code + jspm_promise + assign_code + code;
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

    var global_node_dir = process.env['HOME'] + '/.jspm_global_packages/node_modules';

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
            resolve: {
                root: global_node_dir },
            target: 'node' })).pipe(gulp.dest('../../release/updatables'));
    });

    gulp.task('build_lambda_pattern_tool', function () {
        console.log(process.env['HOME']);
        return gulp.src('lambda_pattern/bin.js').pipe(webpack({
            externals: [node_externals()],
            //plugins: [
            //    new webpack.IgnorePlugin(/.*/)],
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'shebang' }] },
            node: {
                __filename: false,
                __dirname: false },
            output: { filename: 'bin.js' },
            resolve: {
                root: global_node_dir },
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
});
/* Generated by Continuation.js v0.1.7 */