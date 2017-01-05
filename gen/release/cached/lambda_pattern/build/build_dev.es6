const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const gulp = require('gulp');

const build_dev = (path, cb) => {
    const project_tools = require(path.resolve(path, '../lambda/tools.es6'));

    project_tools.before_build_release(project_path, cb);

    build_code(project_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    gulp.src('src/npm/gulpfile.js')
        .pipe(gulp.dest('../../src/npm'))
        .on('end', cont(err));
            if (ERR(err, cb)) {
                return;}
                

    gulp.src('src/npm/gulpfile.js')
        .pipe(gulp.dest('.'))
        .on('end', cont(err));
            if (ERR(err, cb)) {
                return;}
                

    gulp.src('src/tools/tools.js')
        .pipe(webpack({target: 'node', output: {filename: 'built_tools.js'}}))
        .pipe(gulp.dest('src/tools'))
        .on('end', cont(err));
            if (ERR(err, cb)) {
                return;}
                

    project_tools.after_after_dev(project_path, cb);};
