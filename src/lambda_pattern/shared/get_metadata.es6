const _ = (root_path, cb) => {
    .. fs.readFile(root_path + '/meta/data.yaml', 'utf8', cont(err, metadata));
    cb(null, .. js-yaml.safeLoad(metadata), root_path);}
