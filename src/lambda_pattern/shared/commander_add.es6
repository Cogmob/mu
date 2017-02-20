const _ = (commander, mu_src_path, nu_src_path) => {
    .. glob(nu_src_path + '/**/*_api.yaml', cont(err, filenames));
    .. async.map(filenames, read_file, cont(err, contents));
    .. async.map(contents, yaml_read, cont(err, data));
    data.map((datum, i) => {
        commander
            .command(datum['cli'])
            .description(datum['description'])
            .action(require(filenames[i].replace(0, -9)));});};
