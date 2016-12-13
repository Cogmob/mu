const fs = require('fs-extra');
const lambda_state_history = require('../shared/lambda_state_history');
const path = require('path');
const yaml = require('js-yaml');

const set_lambda_version = (root, version_number, cb) => {
    fs.readFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        'utf8',
        cont(err, history));
    history = yaml.safeLoad(history);


    fs.exists(path.resolve(root, 'gen/.updatables/test'), cont(is_test));
    if (!is_test) {
        cb('have not yet written code to update updatables');}
    fs.writeFile(
        path.resolve(root, 'gen/.updatables/version'),
        history['states'][version_number]['lambda_version'] + '\n',
        'utf8',
        cont(err, version));

    fs.move(
        path.resolve(root, 'gen/tools.js'),
        path.resolve(root, 'gen/stored/tools', history['current_state']+'.js'),
        cont(err));

    fs.move(
        path.resolve(root, 'gen/stored/tools', version_number+'.js'),
        path.resolve(root, 'gen/tools.js'),
        cont(err));

    history['current_state'] = version_number;
    fs.writeFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb();}

module.exports = set_lambda_version;
