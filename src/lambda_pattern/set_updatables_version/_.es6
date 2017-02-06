const move = .. fs.move;

const find_project_root = . ../shared/find_project_root;

const _ = (mu_src_path, root_path, version, cb) => {
    (() => {
        make_dir(root_path + '/generated_local', cont(err));
        find_project_root(mu_src_path + '/mu_sub_repo', cont(err, tool_root));
        .. git-archive({
                repoPath: tool_root + '/.git',
                commit: version,
                outputPath: root_path + '/generated_local/updatables.tar'},
            cont(err));
        move_updatables();})();

    const move_updatables = () => {
        make_dir(root_path + '/generated_local/updatables', cont(err));
        .. fs.create_read_stream(root_path + '/generated_local/updatables.tar')
            .pipe(.. tar-fs.extract(
                root_path + '/generated_local/updatables'))
            .on('finish', cleanup)
            .on('error', er => ERR(er, cb));};

    const cleanup = () => {
        remove_path(
            root_path + '/generated_local/lambda_updatables',
            cont(err));
        move(
            root_path + '/generated_local/updatables/gen/release/updatables',
            root_path + '/generated_local/lambda_updatables',
            cont(err));
        remove_path(root_path + '/generated_local/updatables.tar', cont(err));
        remove_path(root_path + '/generated_local/updatables', cont(err));
        cb();};};
