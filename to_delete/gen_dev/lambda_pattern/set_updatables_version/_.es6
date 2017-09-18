// file: set_updatables_version/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    jspm.import('git-archive@^0.1.4'),
    jspm.import('tar-fs@^1.15.0'),
    jspm.import('remove_path'),
    // load local
    require('./../shared/find_project_root'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    module_gitarchive014,
    module_tarfs1150,
    module_remove_path,
    local_include_sharedfind_project_root,
    ERR,
        wordwrap) => {
        const import_make_dirmkdirp = module_fsextra100.mkdirp;
    const import_move_pathmove = module_fsextra100.move;
const _ = (mu_src_path, root_path, version, cb) => {
    const move = module_fsextra100.move;

    const find_project_root = local_include_sharedfind_project_root;

    (() => {
        import_make_dirmkdirp(root_path + '/generated_local', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        find_project_root(mu_src_path + '/mu_sub_repo', cont(err, tool_root));
                if (ERR(err, cb)) {
                    return;}
                    
        module_gitarchive014({
                repoPath: tool_root + '/.git',
                commit: version,
                outputPath: root_path + '/generated_local/updatables.tar'},
            cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        move_updatables();})();

    const move_updatables = () => {
        import_make_dirmkdirp(root_path + '/generated_local/updatables', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        module_fsextra100.createReadStream(root_path + '/generated_local/updatables.tar')
            .pipe(module_tarfs1150.extract(
                root_path + '/generated_local/updatables'))
            .on('finish', cleanup)
            .on('error', er => ERR(er, cb));};

    const cleanup = () => {
        module_remove_path(
            root_path + '/generated_local/lambda_updatables',
            cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        import_move_pathmove(
            root_path + '/generated_local/updatables/gen/release/updatables',
            root_path + '/generated_local/lambda_updatables',
            cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        module_remove_path(root_path + '/generated_local/updatables.tar', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        module_remove_path(root_path + '/generated_local/updatables', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
        cb();};};

    return _;}).catch((err) => {console.log(err);});
