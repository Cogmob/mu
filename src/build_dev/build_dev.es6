
const fs = require('fs-extra');
const path = require('path');

const build_dev = (root, project_path, cb) => {
    fs.ensureDir(path.resolve(project_path, 'gen', 'dev'));
};

module.exports = build_dev;
