const fs = require('fs-extra');
const path = require('path');

const replace_in_file = (root_path, sub_path, search, replace, cb) => {
    full_path = path.resolve(root_path, sub_path);
    fs.readFile(full_path, 'utf8', cont(err, data));
    fs.writeFile(full_path, data.replace(search, replace), cont(err));
    cb();}

module.exports = replace_in_file
