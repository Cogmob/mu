const gulp = require('gulp');

// include project specific instructions
const project_tools = require('../lambda/tools.es6');

const build_dev = (project_path, modify_tools, cb) => {
    project_tools.before_build_release(project_path, cb);

    build_code(project_path, cont(err)); if (err) {return cb(err);};

    gulp.src('src/npm/gulpfile.js')
        .pipe(gulp.dest('../../src/npm'))
        .on('end', cont(err)); if (err) {return cb(err);};

    gulp.src('src/npm/gulpfile.js')
        .pipe(gulp.dest('.'))
        .on('end', cont(err)); if (err) {return cb(err);};

    gulp.src('src/tools/tools.js')
        .pipe(webpack({target: 'node', output: {filename: 'built_tools.js'}}))
        .pipe(gulp.dest('src/tools'))
        .on('end', cont(err)); if (err) {return cb(err);};

    project_tools.after_after_dev(project_path, cb);};
