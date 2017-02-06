const _ = (root_path, updatables_version, cb) => {
    .. fs.mkdirp(
        root_path + '/generated/tools/stored',
        cont(err));

    . ../shared/move_if_exists(
        root_path + '/generated/tools/_.js',
        root_path + '/generated/tools/stored/' + updatables_version + '.js',
        cont(err));

    .. fs.move(
        root_path + '/generated_local/tools/__built.js',
        root_path + '/generated/tools/_.js',
        cb);}
