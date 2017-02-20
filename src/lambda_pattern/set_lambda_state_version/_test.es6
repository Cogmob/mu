.. tape('[module]', {timeout: 9000}, (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}

    . _(
        __dirname + '/../..',
        __dirname + '/before',
        12345,
        cont(err));

    .. serialfs.obj(__dirname + '/before', {}, cont(err, generated));
    .. serialfs.obj(__dirname + '/expected_data', {}, cont(err, expected));
    cb(null, generated, expected);});
