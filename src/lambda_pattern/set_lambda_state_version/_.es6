const fs = require('fs-extra');
const yaml = require('js-yaml');

const lambda_state_history = require('../shared/lambda_state_history');
const set_updatables_version = require('../set_updatables_version/_');

const _ = (mu_src_path, root_path, version_number, cb) => {
    fs.readFile(
        root_path + '/generated/lambda_state_history.yaml',
        'utf8',
        cont(err, history));
    history = yaml.safeLoad(history);

    const updatables_num = history['states'][version_number]['state_version'];
    set_updatables_version(mu_src_path, root_path, updatables_num, cont(err));

    fs.writeFile(
        root_path + '/generated_local/lambda_updatables/version',
        history['states'][version_number]['state_version'] + '\n',
        'utf8',
        cont(err, version));

    fs.move(
        root_path + '/generated/tools.js',
        root_path + '/generated/tools/' + history['current_state_version'] + '.js',
        cont(err));

    fs.move(
        root_path + '/generated/tools/' + version_number + '.js',
        root_path + '/generated/tools.js',
        cont(err));

    history['current_state_version'] = version_number;
    fs.writeFile(
        root_path + '/generated/lambda_state_history.yaml',
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb();}
