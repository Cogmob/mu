(mu_src_path, root_path, version_number, cb) => {
    .. read_file(
        root_path + '/generated/lambda_state_history.yaml',
        'utf8',
        cont(err, history));
    history = .. yaml.safeLoad(history);

    const updatables_num = history['states'][version_number]['state_version'];
    . ../set_updatables_version/_(
        mu_src_path,
        root_path,
        updatables_num,
        cont(err));

    .. write_file(
        root_path + '/generated_local/lambda_updatables/version',
        history['states'][version_number]['state_version'] + '\n',
        'utf8',
        cont(err, version));

    .. move_path(
        root_path + '/generated/tools.js',
        root_path + '/generated/tools/'
            + history['current_state_version'] + '.js',
        cont(err));

    .. move_path(
        root_path + '/generated/tools/' + version_number + '.js',
        root_path + '/generated/tools.js',
        cont(err));

    history['current_state_version'] = version_number;
    .. write_file(
        root_path + '/generated/lambda_state_history.yaml',
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb();}
