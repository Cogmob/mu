const yarn = require('gulp-yarn');
const gulp = require('gulp');

const _ = (path, cb) => {
    gulp.task('_', () => {
        return gulp.src(path + '/package.json')
            .pipe(yarn({noBinLinks: true}))
            .on('end', cb)
            .on('error', cb);});

    gulp.start('_');};
