const _ = (mu_src_path, root_path, metadata, cb) => {
    .. fs.mkdirp(root_path + '/generated_local', cont(err));
    . ../set_updatables_version/_(mu_src_path, root_path, 'HEAD', cont(err));
    . project(mu_src_path, root_path, metadata, cont(err));
    . tools(mu_src_path, root_path, metadata, cb);};
