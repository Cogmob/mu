const fs = require('fs-extra');
const lambda_state_history = require('../shared/lambda_state_history');
const path = require('path');
const yaml = require('js-yaml');

const overwrite_tools = (root, cb) => {
    fs.readFile(
        path.resolve(root, 'gen/.updatables/version'),
        'utf8',
        cont(err, updatables_version));

    fs.readFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        'utf8',
        cont(err, history));

    history = yaml.safeLoad(history);

    fs.move(
        path.resolve(root, 'gen/tools.js'),
        path.resolve(
            root,
            'gen/stored/tools',
            history['current_state_version']+'.js'),
        cont(err));

    fs.copy(
        path.resolve(root, 'gen/dev/src/tools/built_tools.js'),
        path.resolve(root, 'gen/tools.js'),
        cont(err));

    const state_version = history['newest_state_version'] + 1;
    history['current_state_version'] = state_version;
    history['newest_state_version'] = state_version;
    history['state_version_order'].push(state_version);
    history['states'][state_version] = {
        name: 'state',
        state_version: updatables_version.replace(/\n/g, ''),
        dev_built: false,
        dev_tests_passed: false,
        release_built: false,
        release_tests_passed: false};

    fs.writeFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb();}

module.exports = overwrite_tools;
