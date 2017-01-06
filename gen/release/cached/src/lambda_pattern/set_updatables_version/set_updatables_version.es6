const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const git = require('simple-git');

const download_updatables = require('../shared/download_updatables');

const set_updatables_version = (src_path, root, version, cb) => {
    download_updatables(src_path, root, version, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    cb()};

module.exports = set_updatables_version;
