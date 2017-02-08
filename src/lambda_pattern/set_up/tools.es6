const copy_if_exists = . ../shared/copy_if_exists;
const make_package_json = . ../shared/make_package_json;

const _ = (mu_src_path, root, metadata, cb) => {
    const gen_path = root + '/generated_local/tools';
    .. remove_path(gen_path, cont(err));
    .. make_dir(gen_path, cont(err));
    copy_if_exists(root + '/tools', gen_path, cont(err));
    .. make_dir(root + '/generated/tools', cont(err));
    cb();
};
