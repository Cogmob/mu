const gulp = require('gulp');
const node_externals = require('webpack-node-externals');
const debug = require('gulp-debug');
const insert = require('gulp-insert');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const continuation = require('gulp-continuation');
const webpack = require('webpack-stream');

const _ = (root_path, cb) => {
    gulp.task('_', () => {
        return gulp.src(root_path + '/_.js')
            .pipe(webpack({
                context: root_path,
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
            .pipe(gulp.dest(root_path))
            .on('end', cb)
            .on('error', cb);});

    gulp.start('_');};
