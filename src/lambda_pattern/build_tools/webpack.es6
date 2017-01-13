const gulp = require('gulp');
const debug = require('gulp-debug');
const insert = require('gulp-insert');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const continuation = require('gulp-continuation');
const webpack = require('webpack-stream');

const _ = (root_path, cb) => {
    gulp.task('_', () => {
        return gulp.src(root_path + '/_.js')
        /*
            .pipe(webpack({
                target: 'node',
                entry: '_.js',
                output: {
                    library: 'library_name',
                    libraryTarget: 'commonjs2',
                    filename: 'tool_foundation.js'},
                context: root_path}))
               */
            .pipe(gulp.dest(root_path + '/built.js'))
            .on('end', cb)
            .on('error', cb);});

        gulp.start('_');};

module.exports = _;
