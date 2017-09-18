(mu_src_path,  root_path,  metadata,  cb) => {
    const  gen_path  =  root_path  +  '/generated_local/project';
    return  .. jp(
        .. delete_path(gen_path),
        .. make_dir(gen_path),
        .. copy_if_exists(root_path  +  '/submodules',  gen_path),
        .. copy_path(root_path  +  '/_.es6',  gen_path  +  '/_.es6'),
        .. copy_path(root_path  +  '/__test.es6',  gen_path  +  '/__test.es6'),
        . ../set_updatables_version/_(mu_src_path,  root_path,  'HEAD'));};
