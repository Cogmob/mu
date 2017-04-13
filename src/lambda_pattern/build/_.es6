(root, cb) => {
    const copy_if_exists = . ../shared/copy_if_exists;
    const move_if_exists = . ../shared/move_if_exists;
    const remove_if_exists = . ../shared/remove_if_exists;
    const convert_es6 = . ../shared/convert_es6

    console.log(root);
    //remove_if_exists(root + '/generated_local/_.es6', cont(err));
    //remove_if_exists(root + '/generated_local/submodules', cont(err));
    //remove_if_exists(root + '/generated_local/tools', cont(err));
    
    //.. fs.copy(
    //    root + '/_.es6',
    //    root + '/generated_local/_.es6', cont(err));

    //.. vinyl_fs.src(
    //        ['**/*.es6', '!generated*/**', '!node_modules/**'],
    //        {root: root})
    //    .pipe(.. vinyl_fs.dest(root + '/generated_local/submodules'));

    //. modify_es6(root + '/generated_local', cont(err));
    //. webpack(
    //    .. path.join(root, 'generated_local'),
    //    './_.es6',
    //    '_built.js',
    //    cont(err));
    cb(null);};
