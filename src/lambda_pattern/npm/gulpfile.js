'use strict';

var ERR = require('async-stacktrace');
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

gulp.task('es6', function () {
    return gulp.src(['**/*.es6', '!**/node_modules/**']).pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n')).pipe(replace(/\[project\_name\]/g, 'lambda_pattern')).pipe(replace(/cont\(.*err.*\).*;/g, '$&\n            if (ERR(err, cb)) {\n                return;}\n                ')).pipe(gulp.dest('.')).pipe(babel({ presets: ['es2015'] })).pipe(continuation()).pipe(gulp.dest('.'));
});

gulp.task('main_file', function () {
    return gulp.src('lambda_pattern/lambda_pattern.js').pipe(footer('\nif (!module.parent) {\n    lambda_pattern(function (er) {\n        if (er) {\n           console.log(er.toString());\n        }\n    });\n}')).pipe(gulp.dest('lambda_pattern'));
});

gulp.task('backup_gulpfile', function () {
    return gulp.src('lambda_pattern/npm/gulpfile.js').pipe(gulp.dest('../../../src/lambda_pattern/npm'));
});

gulp.task('build_tools', function () {
    return gulp.src('tools/tools.js').pipe(webpack({
        target: 'node',
        output: { filename: 'built_tools.js' },
        context: path.join(process.cwd(), 'tools') })).pipe(gulp.dest('tools'));
});

gulp.task('build_lambda_pattern_tool', function () {
    return gulp.src('lambda_pattern/lambda_pattern.js').pipe(webpack({ target: 'node', output: {
            filename: 'lambda_pattern_tool_built.js' } })).pipe(gulp.dest('lambda_pattern'));
});

gulp.task('build_dev', sequence('es6', 'main_file', 'backup_gulpfile', 'build_tools', 'build_lambda_pattern_tool'));

gulp.task('build_release', sequence('copy_src', 'es6', 'main_file'));
/* Generated by Continuation.js v0.1.7 */