const _ = (root_path, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    const gen_path = root_path + '/generated_local';
    const proj_path = gen_path + '/project';
    . ../shared/move_if_exists(
        proj_path + '/node_modules',
        gen_path + '/project_node_modules',
        cont(err));

    .. fs.remove(proj_path, cont(err));
    .. fs.mkdirp(proj_path, cont(err));

    .. fs.copy(root_path + '/_.es6', proj_path + '/_.es6', cont(err));
    .. fs.copy(root_path + '/__test.es6', proj_path + '/__test.es6', cont(err));
    . ../shared/copy_if_exists(
        root_path + '/submodules',
        proj_path + '/submodules',
        cont(err));

    . ../shared/move_if_exists(
        root_path + '/project_node_modules',
        proj_path + '/node_modules',
        cont(err));

    . modify_es6(proj_path, cont(err));
    . modify_main_file(proj_path, cont(err));
    . convert_es6(proj_path, cont(err));

    cb(null);};
