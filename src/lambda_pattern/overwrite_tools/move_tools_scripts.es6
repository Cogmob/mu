const fs = require('fs-extra');
const move_if_exists = require('../shared/move_if_exists');

const _ = (root_path, updatables_version, cb) => {
    move_if_exists(
        root_path + '/generated/tools.js',
        root_path + '/generated/tools/' + updatables_version + '.js',
        cont(err));

    fs.move(
        root_path + '/generated_local/tools/__built.js',
        root_path + '/generated/tools.js',
        cb);}

module.exports = _;
