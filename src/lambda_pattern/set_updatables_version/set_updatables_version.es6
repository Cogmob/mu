const git = require('simple-git');

const download_updatables = require('../shared/download_updatables');

const set_updatables_version = (tool_root, root, version, cb) => {
    download_updatables(tool_root, root, version, cont(err));
    cb()};

module.exports = set_updatables_version;
