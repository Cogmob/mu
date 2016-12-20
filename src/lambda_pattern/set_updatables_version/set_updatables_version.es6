const git = require('simple-git');

const download_updatables = require('../shared/download_updatables');

const set_updatables_version = (root_path, version, cb) => {
    download_updatables(root_path, version, cont(err));
    cb()};

module.exports = set_updatables_version;
