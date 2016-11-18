const path = require('path');
const fs = require('fs-extra');

const move_file = (before_path, after_path, cb) => {
    before = path.resolve(...before_path);
    after = path.resolve(...after_path);
    fs.move(before, after, cont(err));
    cb();};

module.exports = move_file;
