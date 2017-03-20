const copy_if_exists = . ../shared/copy_if_exists;
const move_if_exists = . ../shared/move_if_exists;
const remove_if_exists = . ../shared/remove_if_exists;
const convert_es6 = . ../shared/convert_es6

const _ = (root, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    move_if_exists(
        root + '/generated_local/tools/node_modules',
        root + '/generated_local/tools_node_modules',
        cont(err));

    remove_if_exists(root + '/generated_local/_.es6', cont(err));
    remove_if_exists(root + '/generated_local/submodules', cont(err));
    remove_if_exists(root + '/generated_local/tools', cont(err));
    
    .. fs.copy(
        root + '/_.es6',
        root + '/generated_local/_.es6', cont(err));

    copy_if_exists(
        root + '/submodules',
        root + '/generated_local/submodules', cont(err));

    copy_if_exists(
        root + '/tools',
        root + '/generated_local/tools', cont(err));

    move_if_exists(
        root + '/generated_local/tools_node_modules',
        root + '/generated_local/tools/node_modules',
        cont(err));

    . modify_es6(root + '/generated_local', cont(err));
    . webpack(
        .. path.join(root, 'generated_local'),
        './_.es6',
        '_built.js',
        cont(err));
    cb(null);};
