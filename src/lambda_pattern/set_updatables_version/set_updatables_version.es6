const git = require('simple-git');

const download_updatables = require('../shared/download_updatables');

const set_updatables_version = (src_path, root, version, cb) => {
    download_updatables(src_path, root, version, cb);};

module.exports = set_updatables_version;
