const fs = require('fs-extra');
const move_if_exists = require('../shared/move_if_exists');
const rsv = require('path').resolve;

const move_tools_scripts = (root, updatables_version, cb) => {
    move_if_exists(
        root + '/gen/stored/tools.js',
        root + '/gen/stored/tools/' + updatables_version + '.js',
        cont(err));

    fs.move(
        rsv(root, 'gen/dev/src/tools/built_tools.js'),
        rsv(root, 'gen/stored/tools.js'),
        cb);}

module.exports = move_tools_scripts;
