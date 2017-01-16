const fs = require('fs-extra');
const move_if_exists = require('../shared/move_if_exists');
const rsv = require('path').resolve;

const move_tools_scripts = (root, updatables_version, cb) => {
    move_if_exists(
        root + '/generated/tools.js',
        root + '/generated/tools/' + updatables_version + '.js',
        cont(err));

    fs.move(
        rsv(root, 'generated_local/tools/__built.js'),
        rsv(root, 'generated/tools.js'),
        cb);}

module.exports = move_tools_scripts;
