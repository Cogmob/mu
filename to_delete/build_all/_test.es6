() => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();};

    . ../create/_(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));

    .. make_dir(__dirname + '/test_project/submodules');
    .. copy_path(__dirname + '/test_module_data',
            __dirname + '/test_project/submodules/test_module',
            cont(err));
    const metadata = {project_name: 'test_project'};
    . ../set_up/_(
        __dirname + '/../..', __dirname + '/test_project', metadata, cont(err));
    . _(__dirname + '/test_project', cont(err));

    // TODO: add extra comparisons for content
    // TODO: create deep equal function which doesn't hang on fail
    const contents = {
        gen: {
            '.gitignore': true,
            dev: {
                lambda_updatables: {
                    example_version: true,
                    'LICENCE.md': true},
                src: {test_project: {
                    'test_project_test.es6': false,
                    'test_project_test.js': false,
                    'test_project.es6': false,
                    'test_project.js': false,
                    'metadata.yaml': false }}},
            stored: {'lambda_state_history.yaml': true}}};

    const generated = .. serialfs.obj(
        __dirname + '/test_project', contents, true,
        cont(err, generated));
    const expected = .. serialfs.obj(
        __dirname + '/expected_data', contents, true,
        cont(err, expected));
    cb(null, generated, expected);};
