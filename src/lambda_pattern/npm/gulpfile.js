'use strict';

var ERR = require('async-stacktrace');
var word_wrap = require('word-wrap');
var webpack = require('webpack-stream');
var insert = require('gulp-insert');
var footer = require('gulp-footer');
var gulp = require('gulp');
var replace = require('gulp-replace');
var sequence = require('gulp-sequence');
var babel = require('gulp-babel');
var del = require('del');
var debug = require('gulp-debug');
var continuation = require('gulp-continuation');
var path = require('path');

gulp.task('tools_es6', function () {
    return gulp.src(['tools/*.es6']).pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n')).pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n')).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(word_wrap(err.stack.replace(/\\\\/g, \'\\\\ \'), {\n                trim: true,\n                width: 80})\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));\n            t.fail();\n            return t.end();}\n        ')).pipe(gulp.dest('.')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('tools'));
});

gulp.task('es6', function () {
    return gulp.src(['lambda_pattern/**/*.es6', '!**/expected/**', '!**/node_modules/**', '!**/*_data/**/*']).pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n')).pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n')).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(replace(/const cb = \(err.*\) \=> \{/g, '$&\n        if (err) {\n            console.log(word_wrap(err.stack.replace(/\\\\/g, \'\\\\ \'), {\n                trim: true,\n                width: 80})\n            .split(\'\\n\').forEach((stack_line) => {\n                console.log(stack_line\n                    .replace(/\\\\ /g, \'\\\\\')\n                    .replace(/ at/g, \'\\nat\')\n                    .replace(/Error:/g, \'\\nError:\'));}));\n            t.fail();\n            return t.end();}\n        ')).pipe(gulp.dest('lambda_pattern')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('lambda_pattern'));
});

gulp.task('main_file', function () {
    return gulp.src('lambda_pattern/lambda_pattern.js').pipe(footer('\nif (!module.parent) {\n    lambda_pattern(function (er) {\n        if (er) {\n           console.log(er.toString());\n        }\n    });\n}')).pipe(gulp.dest('.'));
});

gulp.task('backup_gulpfile', function () {
    return gulp.src('lambda_pattern/npm/gulpfile.js').pipe(gulp.dest('../../../src/lambda_pattern/npm'));
});

gulp.task('build_tools', function () {
    return gulp.src('tools/tools.js').pipe(webpack({
        target: 'node',
        entry: './tools.js',
        output: {
            library: 'library_name',
            libraryTarget: 'commonjs2',
            filename: 'tool_foundation.js' },
        context: path.join(process.cwd(), 'tools') })).pipe(gulp.dest('tools'));
});

gulp.task('build_lambda_pattern_tool', function () {
    return gulp.src('lambda_pattern/lambda_pattern.js').pipe(webpack({ target: 'node', output: {
            filename: 'lambda_pattern_tool_built.js' } })).pipe(gulp.dest('lambda_pattern'));
});

gulp.task('send_built_tools_to_release', function () {
    return gulp.src('lambda_pattern/lambda_pattern_tool_built.js').pipe(insert.prepend('#!/usr/bin/env node\n\n')).pipe(gulp.dest('../../release/updatables'));
});

gulp.task('build_dev', sequence('es6', 'tools_es6', 'main_file', 'backup_gulpfile', 'build_tools', 'build_lambda_pattern_tool', 'send_built_tools_to_release'));

gulp.task('build_release', sequence('copy_src', 'es6', 'main_file'));
/* Generated by Continuation.js v0.1.7 */