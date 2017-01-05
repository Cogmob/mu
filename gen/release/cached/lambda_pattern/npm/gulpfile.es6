const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const webpack = require('webpack-stream');
const insert = require('gulp-insert');
const footer = require('gulp-footer');
const gulp = require('gulp');
const replace = require('gulp-replace');
const sequence = require('gulp-sequence')
const babel = require('gulp-babel');
const del = require('del');
const debug = require('gulp-debug');
const continuation = require('gulp-continuation');
const path = require('path');

gulp.task('tools_es6', ()=>{
    return gulp.src(['tools/*.es6'])
        .pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n'))
        .pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n'))
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
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
            'lambda_pattern/**/*.es6',
            '!**/expected/**',
            '!**/node_modules/**',
            '!**/*_data/**/*'])
        .pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n'))
        .pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n'))
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
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
        .pipe(gulp.dest('lambda_pattern'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(continuation())
        .pipe(gulp.dest('lambda_pattern'));});

gulp.task('main_file', ()=>{
    return gulp.src('lambda_pattern/lambda_pattern.js')
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
    return gulp.src('lambda_pattern/npm/gulpfile.js')
            .pipe(gulp.dest('../../../src/lambda_pattern/npm'));});

gulp.task('build_tools', () => {
    return gulp.src('tools/tools.js')
        .pipe(webpack({
            target: 'node',
            entry: './tools.js',
            output: {
                library: 'library_name',
                libraryTarget: 'commonjs2',
                filename: 'tool_foundation.js'},
            context: path.join(process.cwd(), 'tools')}))
        .pipe(gulp.dest('tools'));});

gulp.task('build_lambda_pattern_tool', () => {
    return gulp.src('lambda_pattern/lambda_pattern.js')
        .pipe(webpack({
            target: 'node',
            output: {
            filename: 'lambda_pattern_tool_built.js'}}))
        .pipe(gulp.dest('lambda_pattern'));});

gulp.task('send_built_tools_to_release', () => {
    return gulp.src('lambda_pattern/lambda_pattern_tool_built.js')
        .pipe(insert.prepend('#!/usr/bin/env node\n\n'))
        .pipe(gulp.dest('../../release/updatables'));});

gulp.task('copy_src', ()=>{
    return gulp.src('../../../src/**/*').pipe(gulp.dest('.'));});

gulp.task('build_dev', sequence(
    'es6',
    'tools_es6',
    'main_file',
    'backup_gulpfile',
    'build_tools',
    'build_lambda_pattern_tool',
    'send_built_tools_to_release'));

gulp.task('build_release',sequence('copy_src', 'es6', 'main_file'));
