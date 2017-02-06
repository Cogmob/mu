const _ = (root_path, cb) => {
    .. gulp.task('_', () => {
        process.chdir(root_path);
        return .. gulp.src(root_path + '/_.js')
            .pipe(.. webpack_stream({
                context: root_path,
                externals: [.. webpack_node_externals()],
                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'shebang'}]},
                node: {
                    __filename: false,
                    __dirname: false},
                output: { filename: '__built.js' },
                target: 'node'}))
            .pipe(.. gulp_insert.prepend('#!/usr/bin/env node\n\n'))
            .pipe(.. gulp.dest(root_path))
            .on('end', cb)
            .on('error', cb);});

    .. gulp.start('_');};
