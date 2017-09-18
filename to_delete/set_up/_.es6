(mu_src_path,  root_path,  metadata,  cb) => {
    return  .. jp(
        .. make_dir(root_path  +  '/generated_local'),
        . ../set_updatables_version/_(mu_src_path,  root_path,  'HEAD'),
        . project(mu_src_path,  root_path,  metadata),
        . tools(mu_src_path, root_path, metadata));};
