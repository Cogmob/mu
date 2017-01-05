const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const move_if_exists = require('../shared/move_if_exists');
const rsv = require('path').resolve;

const move_tools_scripts = (root, updatables_version, cb) => {
    move_if_exists(
        rsv(root, 'gen/stored/tools.js'),
        rsv(root, 'gen/stored/tools') + '/' + updatables_version + '.js',
        cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.move(
        rsv(root, 'gen/dev/src/tools/built_tools.js'),
        rsv(root, 'gen/stored/tools.js'),
        cb);}

module.exports = move_tools_scripts;
