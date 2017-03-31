const _ = (commander, path, cb) => {
    .. glob(
        '**/*_api.yaml',
        {root: path, cwd: path, absolute: false},
        cont(err, filenames));
    const read = (i, cb2) => .. read_file(path + '/' + i, 'utf8', cb2);
    .. async.map(filenames, read, cont(err, data));
    data = data.map(.. yaml_read);
    data = data.map((val, i) => {
        val.filename = filenames[i]
            .slice(0, -9);
        return val;});

    .. async.map(
        data,
        (datum, i) => {
            commander
                .command(datum.cli)
                .description(datum.description)
                .action(require('./before_data/' + datum.filename))
                .call();},
        cont(err, results));
    cb();};
