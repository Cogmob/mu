(root_path, updatables_version, cb) => {
    const move_if_exists = .. move_if_exists;

    .. fs.mkdirp(
        root_path + '/generated/tools/stored',
        cont(err));

    . move_if_exists(
        root_path + '/generated/tools/_.js',
        root_path + '/generated/tools/stored/' + updatables_version + '.js',
        cont(err));

    .. fs.move(
        root_path + '/generated_local/tools/__built.js',
        root_path + '/generated/tools/_.js',
        cb);}
