const webpack = require('webpack-stream');
const header = require('gulp-header');
const footer = require('gulp-footer');
const gulp = require('gulp');
const replace = require('gulp-replace');
const sequence = require('gulp-sequence')
const babel = require('gulp-babel');
const del = require('del');
const debug = require('gulp-debug');
const continuation = require('gulp-continuation');

gulp.task('copy_src', ()=>{
    return gulp.src('../../src/**/*')
            .pipe(gulp.dest('src'))});

gulp.task('main_file', ()=>{
    return gulp.src('src/lambda_pattern/lambda_pattern.js')
        .pipe(header('#!/usr/bin/env node\n\n'))
        .pipe(footer(`
if (!module.parent) {
    lambda_pattern(function (er) {
        if (er) {
           console.log(er.toString());
        }
    });
}`))
        .pipe(gulp.dest('src/lambda_pattern'));});

gulp.task('es6', ()=>{
    return gulp.src('src/**/*.es6')
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
        .pipe(replace(/cont\(.*err.*\).*;/g, '$& if (err) {return cb(err);};'))
        .pipe(gulp.dest('src'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(continuation())
        .pipe(gulp.dest('src'));});

gulp.task('backup_gulpfile', ()=>{
    return gulp.src('src/lambda_pattern/npm/gulpfile.js')
            .pipe(gulp.dest('../../src/lambda_pattern/npm'));});

gulp.task('build_tools', () => {
    return gulp.src('src/tools/tools.js')
        .pipe(webpack({target: 'node', output: {filename: 'built_tools.js'}}))
        .pipe(gulp.dest('src/tools'));});

gulp.task('build_dev', sequence('copy_src', 'es6', 'main_file', 'backup_gulpfile', 'build_tools'));
gulp.task('build_release',sequence('copy_src', 'es6', 'main_file'));