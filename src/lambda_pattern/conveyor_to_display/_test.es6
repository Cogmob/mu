const _ = cb => {
    const steps = . ../shared/join_tables([
        ['func', ... '[0-2]*'.by_file],
        ['expected', ... 'after_data/[0-2]*.yaml'.by_file]]);

    var promise = Promise.resolve(
        __dirname + '/conveyor_to_display/before_data');

    .. map_object((step, name) => {
        promise = promise
            .then(step.func)
            .then(actual => {
                    const d = .. diff(step.expected, actual);
                    if (d) {
                        console.log('actual data does not match expectation:');
                        console.log(
                            .. yaml_write(JSON.parse(JSON.stringify(d))));
                        return Promise.reject();}
                    return Promise.resolve(actual);});}, steps);

    promise.then(() => {
        cb();});};












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
