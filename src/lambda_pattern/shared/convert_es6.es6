const gulp = require('gulp');
const debug = require('gulp-debug');
const insert = require('gulp-insert');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const continuation = require('gulp-continuation');

const _ = (root_path, cb) => {
    gulp.task('_', ()=>{
        return gulp.src([
                root_path + '/**/*.es6',
                '!**/expected/**',
                '!**/node_modules/**',
                '!**/*_data/**/*'])
            .pipe(babel({ presets: ['es2015'] }))
            .pipe(continuation())
            .pipe(gulp.dest(root_path))
            .on('end', cb)
            .on('error', cb);});

        gulp.start('_');};
