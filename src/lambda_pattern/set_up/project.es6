(mu_src_path, root_path, metadata, cb) => {
    const copy_if_exists = . ../shared/copy_if_exists;

    const gen_path = root_path + '/generated_local/project';
    .. remove_path(gen_path, cont(err));
    .. make_dir(gen_path, cont(err));
    copy_if_exists(root_path + '/submodules', gen_path, cont(err));
    .. copy_path(root_path + '/_.es6', gen_path + '/_.es6', cont(err));
    .. copy_path(root_path + '/__test.es6', gen_path + '/__test.es6', cont(err));
    . ../set_updatables_version/_(mu_src_path, root_path, 'HEAD', cont(err));
        /*
    read_file(root_path + '/meta/npm_dependencies.yaml', cont(err, deps));
    read_file(
        root_path + '/meta/npm_dev_dependencies.yaml', cont(err, dev_deps));
         * TODO: Copy behaviour from set_up/tools.es6
    . ../shared/make_package_json(
        mu_src_path,
        metadata,
        gen_path,
        .. yaml.safeLoad(deps),
        .. yaml.safeLoad(dev_deps),
        cont(err));

    console.log('===== install 1 starting');
    install(gen_path, cont(err));
    console.log('===== install 1 finished');
   */
    cb();};
