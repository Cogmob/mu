const fs = require('fs-extra');
const path = require('path');

const update_updatables = require('../update_updatables/update_updatables');

const build_dev = (root, project_path, cb) => {
    update_updatables(root, project_path, cont(err));
    cb(null);
};

module.exports = build_dev;
