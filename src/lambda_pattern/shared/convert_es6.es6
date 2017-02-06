const _ = (root_path, cb) => {
    .. gulp.task('_', ()=>{
        return .. gulp.src([
                root_path + '/**/*.es6',
                '!**/expected/**',
                '!**/node_modules/**',
                '!**/*_data/**/*'])
            .pipe(.. gulp-babel({ presets: ['es2015'] }))
            .pipe(.. continuation())
            .pipe(.. gulp.dest(root_path))
            .on('end', cb)
            .on('error', cb);});

        .. gulp.start('_');};
