const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const path = require('path');
const fs = require('fs-extra');

const move_file = (before_path, after_path, cb) => {
    before = path.resolve(...before_path);
    after = path.resolve(...after_path);
    fs.move(before, after, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    cb();};

module.exports = move_file;
