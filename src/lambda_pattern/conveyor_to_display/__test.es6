const _ = (cb) => {
    . 1_pre_ast(__dirname + '/before_data', cont(err, code));
    .. read_file(
        __dirname + '/after_data/1_pre_ast.yaml',
        'utf8',
        cont(err, expected));
    cb(.. diff(.. yaml_read(expected), code));}
