.. tape('[module]', (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}
    . ../create/_(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));
    const metadata = {project_name: 'test_project'};
    . ../set_up/_(
        __dirname + '/../..', __dirname + '/test_project', metadata, cont(err));
    . ../build/_(__dirname + '/test_project', cont(err));
    . _(__dirname + '/test_project', cont(err));
    . ../build/_(__dirname + '/test_project', cont(err));
    . _(__dirname + '/test_project', cont(err));
    . ../build/_(__dirname + '/test_project', cont(err));
    . _(__dirname + '/test_project', cont(err));
    .. serialfs.obj(
        __dirname + '/test_project',
        false,
        true,
        cont(err, generated));
    .. serialfs.obj(
        __dirname + '/expected_data',
        false,
        true,
        cont(err, expected));
    cb(null, generated, expected);});
