const _ = (root_path, entry, output, cb) => {
    console.log(root_path);
    const compiler = .. webpack({
        entry: entry,
        context: root_path,
        externals: [.. webpack_node_externals()],
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'shebang'}, {
                test: /\.js$/,
                loader: 'es6-loader'}]},
        node: {
            __filename: true,
            __dirname: true},
        output: {filename: output, path: root_path},
        target: 'node'}, cont(err, stats));
    cb();};

    //.pipe(.. gulp_insert.prepend('#!/usr/bin/env node\n\n'))
