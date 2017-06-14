() => {
    const  mu_src_path  =  __dirname  +  '/../..';
    const  contents = {
        gen: {
            '.gitignore':  true,
            dev:  {lambda_updatables: {
                example_version:  true,
                'LICENCE.md':  true}},
            stored:  {'lambda_state_history.yaml':  true}}};
    var gen, exp;
    return  .. join_promises(
        . ../create/_(mu_src_path,  __dirname,  'test_project',  2000),
        .. get_metadata(__dirname  +  '/test_project'),
        info  => . _(mu_src_path,  __dirname  +  '/test_project',  info),
        .. serialfs.obj(__dirname  +  '/test_project',  contents),
        _gen => {gen = _gen;},
        .. serialfs.obj(__dirname  +  '/expected_data',  contents),
        _exp => {exp = _exp;},
        .. test_compare(gen,  exp));};
