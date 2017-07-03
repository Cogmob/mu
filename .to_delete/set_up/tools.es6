(mu_src_path,  root,  metadata,  cb) => {
    const  gen_path  =  root  +  '/generated_local/tools';
    return  .. jp(
        .. remove_path(gen_path),
        .. make_dir(gen_path),
        .. copy_if_exists(root  +  '/tools',  gen_path),
        .. make_dir(root  +  '/generated/tools'));};
