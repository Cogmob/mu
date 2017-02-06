const _ = (root, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    . ../shared/move_if_exists(
        root + '/generated_local/tools/node_modules',
        root + '/generated_local/tools_node_modules',
        cont(err));

    .. fs.remove(root + '/generated_local/tools', cont(err));
    . ../shared/copy_if_exists(
        root + '/tools',
        root + '/generated_local/tools', cont(err));

    . ../shared/move_if_exists(
        root + '/generated_local/tools_node_modules',
        root + '/generated_local/tools/node_modules',
        cont(err));

    . modify_es6(root + '/generated_local/tools', cont(err));
    . ../shared/convert_es6(root + '/generated_local/tools', cont(err));
    console.log('webpack for tools start');
    . webpack(root + '/generated_local/tools', cont(err));
    console.log('webpack for tools finished');

    cb(null);};
