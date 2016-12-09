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
const path = require('path');

gulp.task('es6', ()=>{
    return gulp.src('**/*.es6')
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
        .pipe(replace(/cont\(.*err.*\).*;/g, '$& if (err) {return cb(err);};'))
        .pipe(gulp.dest('.'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(continuation())
        .pipe(gulp.dest('.'));});

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
        .pipe(gulp.dest('[project_name]'));});

gulp.task('backup_gulpfile', ()=>{
    return gulp.src('[project_name]/npm/gulpfile.js')
            .pipe(gulp.dest('../../../src/[project_name]/npm'));});

gulp.task('build_tools', () => {
    return gulp.src('tools/tools.js')
        .pipe(webpack({
            target: 'node',
            output: {filename: 'built_tools.js'},
            context: path.join(process.cwd(), 'tools')}))
        .pipe(gulp.dest('tools'));});

gulp.task('build_lambda_pattern_tool', () => {
    return gulp.src('[project_name]/[project_name].js')
        .pipe(webpack({target: 'node', output: {
            filename: 'lambda_pattern_tool_built.js'}}))
        .pipe(gulp.dest('[project_name]'));});

gulp.task('build_dev', sequence(
    'es6',
    'main_file',
    'backup_gulpfile',
    'build_tools',
    'build_lambda_pattern_tool'));

gulp.task('build_release',sequence('copy_src', 'es6', 'main_file'));
