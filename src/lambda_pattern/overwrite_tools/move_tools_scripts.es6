const fs = require('fs-extra');
const path = require('path');

const move_tools_scripts = (root, updatables_version, cb) => {
    fs.move(
        path.resolve(root, 'gen/stored/tools.js'),
        path.resolve(
            root,
            'gen/stored/tools',
            updatables_version + '.js'),
        cont(err));

    fs.move(
        path.resolve(root, 'gen/dev/src/tools/built_tools.js'),
        path.resolve(root, 'gen/stored/tools.js'),
        cb);}

module.exports = move_tools_scripts;
