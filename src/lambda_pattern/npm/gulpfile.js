'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('glob'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_glob, ERR, wordwrap) {
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
    var strip = require('gulp-strip-comments');

    var module_map = yaml(fs.readFileSync('lambda_pattern/module_map.yaml', 'utf8'));

    var add_module = function add_module(code, imports_code, assign_code, alias_code, key) {
        var modname = key;

        var mod_varname = 'module_' + key.replace(/[^a-zA-Z0-9_]/g, '');
        var varname = 'import_' + modname;
        var ext = null;

        if (key in module_map) {
            modname = module_map[key][0];
            mod_varname = 'module_' + modname.replace(/[^a-zA-Z0-9_]/g, '');
            if (module_map[key].length > 1) {
                ext = module_map[key][1];
                varname += ext.replace(/[^a-zA-Z0-9_]/g, '');
                code = code.replace('.. ' + key, varname);
            } else {
                code = code.replace('.. ' + key, mod_varname);
            }
        } else {
            code = code.replace('.. ' + key, mod_varname);
        }

        var require_string = 'jspm.import(\'' + modname + '\')';
        if (!imports_code.includes(require_string)) {
            imports_code += '    ' + require_string + ',\n';
        }

        var assign_string = '' + mod_varname;
        if (!assign_code.includes(assign_string)) {
            assign_code += '    ' + assign_string + ',\n';
        }

        if (ext) {
            var alias_string = 'const ' + varname + ' = ' + mod_varname + '.' + ext + ';';
            if (!alias_code.includes(alias_string)) {
                alias_code += '    ' + alias_string + '\n';
            }
        }

        return [code, imports_code, assign_code, alias_code];
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
        var alias_code = '';
        if (imports.length > 0) {
            imports_code = '    /' + '/ load jspm\n';
            for (var i in imports) {
                var _add_module = add_module(ret, imports_code, assign_code, alias_code, imports[i]);

                var _add_module2 = _slicedToArray(_add_module, 4);

                ret = _add_module2[0];
                imports_code = _add_module2[1];
                assign_code = _add_module2[2];
                alias_code = _add_module2[3];
            }
        }
        return [ret, imports_code, assign_code, alias_code];
    };

    var add_regex_includes = function add_regex_includes(ret, map, imports_code, assign_code) {
        var re = /(^|[^a-zA-Z0-9])\.\.\. \'[^\']+\'/g;
        var imports = [];
        var module_bundle_code = '';
        var m;
        do {
            m = re.exec(ret);
            if (m) {
                imports.push(m[0].substring(6, m[0].length - 1));
            }
        } while (m);
        if (imports.length > 0) {
            imports_code += '    /' + '/ load regex\n';
            for (var i in imports) {
                var files = module_glob.sync(imports[i], {
                    cwd: __dirname + '/..',
                    root: __dirname + '/..' });
                var varname = 'regex_' + imports[i].replace(/[^a-zA-Z0-9_]/g, '');
                module_bundle_code = '    ' + varname + ' = {\n';
                module_bundle_code += '        by_file: {},\n';
                module_bundle_code += '        by_folder: {}};\n';
                ret = ret.replace('... \'' + imports[i] + '\'', varname);
                for (var f in files) {
                    var filename = files[f].replace('.es6', '.js');
                    var file_varname = varname + '__' + filename;
                    file_varname = file_varname.replace(/[^a-zA-Z0-9_]/g, '');
                    var sections = filename.split('/');
                    var short_name = sections[sections.length - 1].split('.')[0];
                    var folder_name = sections[sections.length - 2];

                    imports_code += '    ' + ('require(\'./' + filename + '\')') + ',\n';

                    assign_code += '    ' + file_varname + ',\n';

                    module_bundle_code += '    ' + varname + '.by_file[\'';
                    module_bundle_code += short_name;
                    module_bundle_code += '\'] = ' + file_varname + ';\n';

                    module_bundle_code += '    ' + varname + '.by_folder[\'';
                    module_bundle_code += folder_name;
                    module_bundle_code += '\'] = ' + file_varname + ';\n';
                }
            }
        }
        return [ret, imports_code, assign_code, module_bundle_code];
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
            imports_code += '    /' + '/ load local\n';
            for (var i in imports) {
                var varname = 'local_include_' + imports[i].replace(/[^a-zA-Z0-9_]/g, '');
                ret = ret.replace('. ' + imports[i], varname);
                var imports_string = 'require(\'./' + imports[i] + '\')';
                if (!imports_code.includes(imports_string)) {
                    imports_code += '    ' + imports_string + ',\n';
                }
                var assign_string = varname;
                if (!assign_code.includes(assign_string)) {
                    assign_code += '    ' + assign_string + ',\n';
                }
            }
        }
        return [ret, imports_code, assign_code];
    };

    var es6_prefix = 'const jspm = eval(\'require\')(\n    process.env[\'HOME\'] + \'/.jspm_global_packages/node_modules/jspm/api.js\');\nconst q = eval(\'require\')(\n    process.env[\'HOME\'] + \'/.jspm_global_packages/node_modules/q/q.js\');\njspm.setPackagePath(process.env[\'HOME\'] + \'/.jspm_global_packages\');\nconst promises = [\n';

    var jspm_promise_a = '    // other\n    jspm.import(\'async-stacktrace\'),\n    jspm.import(\'wordwrap\')];\nmodule.exports = q.all(promises).spread((\n';

    var jspm_promise_b = '    ERR,\n    wordwrap) => {\n';

    gulp.task('tools_es6', function () {
        return gulp.src(['tools/*.es6']).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(replace(/\[filename\]/g, 'lambda_pattern')).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(wordwrap(20, 81)(\n                err.stack.replace(/\\\\/g, \'\\\\ \').replace(/^/gm, \'.\'))\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));}\n            t.fail();\n            return t.end();}\n        ')).pipe(gulp.dest('.')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('tools'));
    });

    gulp.task('es6', function () {
        return gulp.src(['lambda_pattern/**/*.es6', '!**/expected/**', '!**/node_modules/**', '!**/*_data/**/*']).pipe(vmap(function (code, filename) {
            var code = code.toString();
            return code.replace(/^\s*\/\*[\s\S]*?\*\/|^\s*([^\\:]|^)\/\/.*$/gm, '$1');
        })).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(vmap(function (code, filename) {
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
            code += '}).catch((err) => {console.log(err);});\n';

            var imports_code, assign_code, alias_code, module_bundle_code;

            var _add_includes = add_includes(code, module_map);

            var _add_includes2 = _slicedToArray(_add_includes, 4);

            code = _add_includes2[0];
            imports_code = _add_includes2[1];
            assign_code = _add_includes2[2];
            alias_code = _add_includes2[3];

            var _add_local_includes = add_local_includes(code, module_map, imports_code, assign_code);

            var _add_local_includes2 = _slicedToArray(_add_local_includes, 3);

            code = _add_local_includes2[0];
            imports_code = _add_local_includes2[1];
            assign_code = _add_local_includes2[2];

            var _add_regex_includes = add_regex_includes(code, module_map, imports_code, assign_code);

            var _add_regex_includes2 = _slicedToArray(_add_regex_includes, 4);

            code = _add_regex_includes2[0];
            imports_code = _add_regex_includes2[1];
            assign_code = _add_regex_includes2[2];
            module_bundle_code = _add_regex_includes2[3];

            return es6_prefix + imports_code + jspm_promise_a + assign_code + jspm_promise_b + module_bundle_code + alias_code + code;
        })).pipe(vmap(function (code, filename) {
            return code.toString();
        })).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(wordwrap(20, 81)(\n                err.stack.replace(/\\\\/g, \'\\\\ \').replace(/^/gm, \'.\'))\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));}\n        ')).pipe(gulp.dest('lambda_pattern')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('lambda_pattern'));
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
                preloaders: [{
                    test: /\.js/,
                    loader: 'import-glob' }],
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
        return gulp.src('lambda_pattern/_.es6').pipe(webpack({
            externals: [node_externals()],

            module: {
                preloaders: [{
                    test: /\.js/,
                    loader: 'import-glob' }],
                loaders: [{
                    test: /\.txt$/,
                    loader: 'raw-loader' }, {
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
            target: 'node' })).pipe(insert.prepend('#!/usr/bin/env node\n\n')).pipe(footer('\nif (!module.parent) {\n    module.exports.then(function(f) {f(function (er) {\n        if (er) {\n           console.log(er.toString());\n        }\n    });});\n}')).pipe(gulp.dest('../../release'));
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

    gulp.task('copy_ignore_to_release', function () {
        return gulp.src('lambda_pattern/.gitignore').pipe(gulp.dest('../../release'));
    });

    gulp.task('copy_src', function () {
        return gulp.src('../../../src/**/*').pipe(gulp.dest('.'));
    });

    gulp.task('build', sequence('copy_skel_to_parent', 'es6', 'tools_es6', 'main_file', 'backup_gulpfile', 'build_updatables', 'build_lambda_pattern_tool', 'copy_ignore_to_release', 'copy_skel_to_release', 'copy_yaml_to_release'));

    gulp.start('build');
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */