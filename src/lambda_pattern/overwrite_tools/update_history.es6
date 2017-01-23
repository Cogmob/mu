const fs = require('fs-extra');
const yaml = require('js-yaml');

const update_history = (root_path, history, updatables_version, cb) => {
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
        root_path + '/generated/lambda_state_history.yaml',
        yaml.safeDump(history),
        'utf8',
        cont(err));

    cb(null, history);}

module.exports = update_history;
