const _ = (curr_path, cb) => {
    .. file_exists(curr_path + '/.git', cont(err, exists))
    if (exists) {
        return cb(null, curr_path);}
    _(curr_path + '/..', cb);}
