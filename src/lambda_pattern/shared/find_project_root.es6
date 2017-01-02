const fs = require('fs-extra');

const find_project_root = (path, cb) => {
    fs.stat(path + '/.git', cont(err, exists))
    if (exists) {
        return cb(null, path);}
    find_project_root(path + '/..', cb);}

module.exports = find_project_root;
