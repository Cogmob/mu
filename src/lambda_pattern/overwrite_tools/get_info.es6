const _ = (root_path, cb) => {
    .. fs.readFile(
        root_path + '/generated_local/lambda_updatables/version',
        'utf8',
        cont(err, updatables_version));

    .. fs.readFile(
        root_path + '/generated/lambda_state_history.yaml',
        'utf8',
        cont(err, history));

    history = .. js-yaml.safeLoad(history);

    cb(null, updatables_version, history);}
