const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

const lambda_state_history = require('../shared/lambda_state_history');
const set_updatables_version = require('../set_updatables_version/_');

const _ = (src_path, root, version_number, cb) => {
    fs.readFile(
        path.resolve(root, 'generated/lambda_state_history.yaml'),
        'utf8',
        cont(err, history));
    history = yaml.safeLoad(history);

    const updatables_num = history['states'][version_number]['state_version'];
    set_updatables_version(src_path, root, updatables_num, cont(err));

    fs.writeFile(
        path.resolve(root, 'generated_local/lambda_updatables/version'),
        history['states'][version_number]['state_version'] + '\n',
        'utf8',
        cont(err, version));

    fs.move(
        root + '/generated/tools.js',
        root + '/generated/tools/' + history['current_state_version'] + '.js',
        cont(err));

    fs.move(
        root + '/generated/tools/' + version_number + '.js',
        root + '/generated/tools.js',
        cont(err));

    history['current_state_version'] = version_number;
    fs.writeFile(
        path.resolve(root, 'generated/lambda_state_history.yaml'),
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb();}

module.exports = _;
