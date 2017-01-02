const fs = require('fs-extra');
const lambda_state_history = require('../shared/lambda_state_history');
const path = require('path');
const yaml = require('js-yaml');

const set_lambda_state_version = (root, version_number, cb) => {
    fs.readFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        'utf8',
        cont(err, history));
    history = yaml.safeLoad(history);


    fs.exists(path.resolve(root, 'gen/dev/lambda_updatables/test'), cont(is_test));
    if (!is_test) {
        return cb('have not yet written code to update updatables');}
    fs.writeFile(
        path.resolve(root, 'gen/dev/lambda_updatables/version'),
        history['states'][version_number]['state_version'] + '\n',
        'utf8',
        cont(err, version));

    fs.move(
        root + '/gen/tools.js',
        root + '/gen/stored/tools' + '/'
            + history['current_state_version'] + '.js',
        cont(err));

    fs.move(
        root + '/gen/stored/tools' + '/' + version_number + '.js',
        root + '/gen/tools.js',
        cont(err));

    history['current_state_version'] = version_number;
    fs.writeFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb();}

module.exports = set_lambda_state_version;