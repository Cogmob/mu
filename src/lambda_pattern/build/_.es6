(root, cb) => {
    console.log(root);
    //.. remove_if_exists(root + '/generated_local/_.es6', cont(err));
    //.. remove_if_exists(root + '/generated_local/submodules', cont(err));
    //.. remove_if_exists(root + '/generated_local/tools', cont(err));
    
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
