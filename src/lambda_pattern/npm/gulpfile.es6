const webpack = require('webpack-stream');
const node_externals = require('webpack-node-externals');
const insert = require('gulp-insert');
const footer = require('gulp-footer');
const gulp = require('gulp');
const replace = require('gulp-replace');
const sequence = require('gulp-sequence')
const babel = require('gulp-babel');
const del = require('del');
const debug = require('gulp-debug');
const continuation = require('gulp-continuation');
const vmap = require('vinyl-map');
const S = require('string');

gulp.task('tools_es6', ()=>{
    return gulp.src(['tools/*.es6'])
        .pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n'))
        .pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n'))
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
        .pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n'))
        .pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n'))
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
        .pipe(vmap((code, filename) => {
            var ret = code.toString();
            filename = filename.split('.');
            filename = filename[filename.length - 2];
            filename = filename.split('\\');
            const last = filename.length - 1

            const name = filename[last];
            ret = S(ret).replaceAll('[file' + 'name]', name).s;
            const module = filename[last - 1];
            ret = S(ret).replace('[mod' + 'ule]', module).s;

            if (!ret.includes('module.exports') && ret.includes('const _ =')) {
                ret += '\nmodule.exports = _;';}

            return ret;}))
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
        .pipe(gulp.dest('[project_name]'));});

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

gulp.task('build_updatables', () => {
    return gulp.src('[project_name]/updatables/_.js')
        .pipe(webpack({
            externals: [node_externals()],
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'shebang'}]},
            node: {
                __filename: false,
                __dirname: false},
            output: { filename: '_.js' },
            target: 'node'}))
        .pipe(insert.prepend('#!/usr/bin/env node\n\n'))
        .pipe(gulp.dest('../../release/updatables'));});

gulp.task('build_lambda_pattern_tool', () => {
    return gulp.src('[project_name]/bin.js')
        .pipe(webpack({
            externals: [node_externals()],
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'shebang'}]},
            node: {
                __filename: false,
                __dirname: false},
            output: { filename: 'bin.js' },
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
    return gulp.src('[project_name]/.npmignore')
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
