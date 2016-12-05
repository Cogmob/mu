const fs = require('fs-extra');
const path = require('path');
const es6 = require('./es6');
const gulp = require('gulp');

const project_tools = require('../lambda/tools.es6');

const build_code = (project_path, cb) => {
    fs.copy(path.resolve(
        project_path, '../../src'),
        path.resolve(project_path, 'src'),
        cont(err));

    project_tools.before_processing(project_path, cont(err));

    gulp.src('src/**/*.es6')
        .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
        .pipe(replace(/cont\(.*err.*\).*;/g, '$& if (err) {return cb(err);};'))
        .pipe(gulp.dest('src'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(continuation())
        .pipe(gulp.dest('src'))
        .on('end', cont(err));

    gulp.src('src/[project_name]/[project_name].js')
        .pipe(header('#!/usr/bin/env node\n\n'))
        .pipe(footer(`
if (!module.parent) {
    lambda_pattern(function (er) {
        if (er) {
           console.log(er.toString());
        }
    });
}`))
        .pipe(gulp.dest('src/[project_name]'))
        .on('end', cont(err));

    project_tools.after_processing(project_path, cb);};
