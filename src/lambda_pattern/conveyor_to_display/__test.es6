const _ = (cb) => {
    . 1_pre_ast(__dirname + '/before_data', cont(err, files));
    .. read_file(
        __dirname + '/after_data/1_pre_ast.yaml',
        'utf8',
        cont(err, expected));
    var d;
    d = .. diff(.. yaml_read(expected), files);
    if (d) {
        return cb(.. yaml_write(d));}

    const ad = __dirname + '/after_data/2_ast.yaml';
    . 2_ast(files, cont(err, files));
    .. read_file(ad, 'utf8', cont(err, expected));
    .. write_file(
        ad,
        .. json_to_yaml(JSON.parse(JSON.stringify(files))),
        cont(err));
    .. yaml_read(expected);
    d = .. diff(.. yaml_read(expected), files);
    if (d) {
        console.log(.. yaml_write(JSON.parse(JSON.stringify(d))));
        return cb(.. yaml_write(JSON.parse(JSON.stringify(d))));}
    cb();}
