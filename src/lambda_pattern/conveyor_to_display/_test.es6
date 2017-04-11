const _ = (cb) => {
    const steps = {};
    .. map_object(
        (val, key) => {
            steps[key] = {};
            steps[key].func = val},
        ... '[0-9]*'.by_file);
    .. map_object(
        (val, key) => steps[key].expected_data = val,
        ... 'after_data/[0-9]*.yaml'.by_file);

    console.log(steps);

    cb();}

//    const steps = . .. 



//            . 5_displayed,
//            '5_displayed']];
//    
//    const promise = remaining_funcs.reduce(
//        (series, func) => {
//            (remaining_names, files) => {
//        const name = remaining_names.pop();
//        const func = remaining_names.pop();
//        const file_promises = [];
//        for (let file of files) {
//            promises.push(remaining_funcs.pop()(remaining_names.pop()
//        remaining_funcs.pop()(data
//
//    const data = . 1_pre_ast(__dirname + '/before_data', cont(err, files));
//
//    run_remaining_tests(funcs, names, files)
//        .fail(err => cb(err))
//        .then(() => cb());
//
//
//
//    var after_path;
//
//    . 1_pre_ast(__dirname + '/before_data', cont(err, files));
//    .. read_file(
//        __dirname + '/after_data/1_pre_ast.yaml',
//        'utf8',
//        cont(err, expected));
//    var d;
//    d = .. diff(.. yaml_read(expected), files);
//    if (d) {
//        return cb(.. yaml_write(d));}
//
//    for (let file of files) {
//        . 2_ast(file['contents'], cont(err, code));
//        file['contents'] = code;};
//    after_path = __dirname + '/after_data/2_ast.yaml';
//    .. read_file(after_path, 'utf8', cont(err, expected));
//    .. yaml_read(expected);
//    d = .. diff(.. yaml_read(expected), files);
//    if (d) {
//        console.log(.. yaml_write(JSON.parse(JSON.stringify(d))));
//        return cb(.. yaml_write(JSON.parse(JSON.stringify(d))));}
//
//    for (let file of files) {
//        . 4_generated(file['contents'], cont(err, code));
//        file['contents'] = code;};
//    after_path = __dirname + '/after_data/4_generated.yaml';
//    .. read_file(after_path, 'utf8', cont(err, expected));
//    .. yaml_read(expected);
//    d = .. diff(.. yaml_read(expected), files);
//    if (d) {
//        return cb(.. yaml_write(JSON.parse(JSON.stringify(d))));}
