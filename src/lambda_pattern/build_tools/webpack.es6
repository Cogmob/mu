const _ = (root_path, entry, output, cb) => {
    console.log('starting webpack');
    .. webpack({
        entry: root_path + entry,
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
        output: { filename: root_path + output },
        target: 'node'}, cont(err));
        console.log('done');
        cb();};

    //.pipe(.. gulp_insert.prepend('#!/usr/bin/env node\n\n'))
