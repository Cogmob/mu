const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const path = require('path');

const replace_in_file = (file_path, search, replace, cb) => {
    full_path = path.resolve(...file_path);
    fs.readFile(full_path, 'utf8', cont(err, data)); if (err) {return cb(err);
            if (ERR(err, cb)) {
                return;}
                }
    fs.writeFile(full_path, data.replace(search, replace), cont(err)); if (err) {return cb(err);
            if (ERR(err, cb)) {
                return;}
                }
    cb();}

module.exports = replace_in_file;
