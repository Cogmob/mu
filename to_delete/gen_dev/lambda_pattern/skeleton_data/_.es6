const _ = (cb) => {
    .. fs.readFile('asdf', cont(err, res));
    console.log('running');
    cb();};
