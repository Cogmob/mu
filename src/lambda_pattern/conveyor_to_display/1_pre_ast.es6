const _ = (path, cb) => {
    .. serialfs.list(path, cont(err, code));
    cb(null, code);}
