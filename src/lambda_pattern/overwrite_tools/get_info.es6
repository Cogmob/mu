const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

const get_info = (root, cb) => {
    fs.readFile(
        path.resolve(root, 'gen/dev/lambda_updatables/version'),
        'utf8',
        cont(err, updatables_version));

    fs.readFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        'utf8',
        cont(err, history));

    history = yaml.safeLoad(history);

    cb(null, updatables_version, history);}

module.exports = get_info;
