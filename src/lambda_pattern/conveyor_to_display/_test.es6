const _ = (cb) => {
    var after_path;

    . 1_pre_ast(__dirname + '/before_data', cont(err, files));
    .. read_file(
        __dirname + '/after_data/1_pre_ast.yaml',
        'utf8',
        cont(err, expected));
    var d;
    d = .. diff(.. yaml_read(expected), files);
    if (d) {
        return cb(.. yaml_write(d));}

    for (let file of files) {
        . 2_ast(file['contents'], cont(err, code));
        file['contents'] = code;};
    after_path = __dirname + '/after_data/2_ast.yaml';
    .. read_file(after_path, 'utf8', cont(err, expected));
    .. yaml_read(expected);
    d = .. diff(.. yaml_read(expected), files);
    if (d) {
        console.log(.. yaml_write(JSON.parse(JSON.stringify(d))));
        return cb(.. yaml_write(JSON.parse(JSON.stringify(d))));}

    for (let file of files) {
        . 4_generated(file['contents'], cont(err, code));
        file['contents'] = code;};
    after_path = __dirname + '/after_data/4_generated.yaml';
    .. read_file(after_path, 'utf8', cont(err, expected));
    .. yaml_read(expected);
    d = .. diff(.. yaml_read(expected), files);
    if (d) {
        return cb(.. yaml_write(JSON.parse(JSON.stringify(d))));}

    cb();}
