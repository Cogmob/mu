const fs = require('fs-extra');

const _ = (curr_path, cb) => {
    fs.stat(curr_path + '/.git', cont(err, exists))
    if (exists) {
        return cb(null, curr_path);}
    _(curr_path + '/..', cb);}
