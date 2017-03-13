const _ = (root_path, cb) => {
    var data = .. vinyl_fs.src([
                '/**' + '/*.es6',
                '!*' + '*/expected/**',
                '!**' + '/node_modules/**',
                '!**' + '/*_data/**' + '/*'],
            {root: root_path})
        .pipe(.. map_stream((file, cb2) => {
            var contents = file.contents.toString();
            contents = . header.txt + contents
                .replace(/\[project\_name\]/g, 'lambda_pattern')
                .replace(/cont\(.*err.*\).*;/g, . error_handler.txt)
                .replace(/const cb = \(err.*\) \=> \{/g, . cb_define.txt);
            contents = .. continuation.compile(contents);
            file.contents = new Buffer(contents);
            cb2(null, file);}))
        .pipe(.. vinyl_fs.dest(root_path))
        .on('finish', () => cb());
};
