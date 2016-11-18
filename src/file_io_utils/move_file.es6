const path = require('path');
const fs = require('fs-extra');

const move_file = (root_path, before_path, after_path, cb) => {
    before = path.resolve(root_path, before_path);
    after = path.resolve(root_path, after_path);
    fs.move(before, after, cont(err));
    cb();};

module.exports = move_file;
