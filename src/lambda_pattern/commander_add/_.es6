const _ = (commander, mu_src_path, nu_src_path, cb) => {
    .. glob(
        '**/*_api.yaml',
        {root: nu_src_path, cwd: nu_src_path, absolute: false},
        cont(err, filenames));
    const read = (i, cb) => .. read_file(nu_src_path + '/' + i, 'utf8', cb);
    .. async.map(filenames, read, cont(err, data));
    data = data.map(.. yaml_read);
    data = data.map((val, i) => {
        val.filename = filenames[i].replace(nu_src_path, '').slice(0, -9);
        return val;});

    .. async.map(data, (datum, i) => {
        commander
            .command(datum.cli)
            .description(datum.description)
            .action(require(nu_src_path + '/' + datum.filename))
            .call(cb);});};
