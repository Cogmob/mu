const _ = (commander, path, cb) => {
    .. glob(
        '**/*_api.yaml',
        {root: path, cwd: path, absolute: false},
        cont(err, filenames));
    const read = (i, cb) => .. read_file(path + '/' + i, 'utf8', cb);
    .. async.map(filenames, read, cont(err, data));
    data = data.map(.. yaml_read);
    data = data.map((val, i) => {
        val.filename = filenames[i].replace(path, '').slice(0, -9);
        return val;});

    .. async.map(data, (datum, i) => {
        commander
            .command(datum.cli)
            .description(datum.description)
            .action(require(path + '/' + datum.filename))
            .call(cb);});};
