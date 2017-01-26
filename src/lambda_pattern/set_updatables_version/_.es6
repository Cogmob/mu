const tar = require('tar-fs')
const rsv = require('path').resolve;
const archive = require('git-archive')
const fs = require('fs-extra');
const mkdirp = fs.mkdirp;
const create_read_stream = fs.createReadStream;
const remove = fs.remove;
const move = fs.move;

const find_project_root = require('../shared/find_project_root');

const _ = (mu_src_path, root_path, version, cb) => {
    (() => {
        mkdirp(root_path + '/generated_local', cont(err));
        find_project_root(mu_src_path + '/mu_sub_repo', cont(err, tool_root));
        archive({
                repoPath: tool_root + '/.git',
                commit: version,
                outputPath: root_path + '/generated_local/updatables.tar'},
            cont(err));
        move_updatables();})();

    const move_updatables = () => {
        mkdirp(root_path + '/generated_local/updatables', cont(err));
        create_read_stream(root_path + '/generated_local/updatables.tar')
            .pipe(tar.extract(
                root_path + '/generated_local/updatables'))
            .on('finish', cleanup)
            .on('error', er => ERR(er, cb));};

    const cleanup = () => {
        remove(root_path + '/generated_local/lambda_updatables', cont(err));
        move(
            root_path + '/generated_local/updatables/gen/release/updatables',
            root_path + '/generated_local/lambda_updatables',
            cont(err));
        remove(root_path + '/generated_local/updatables.tar', cont(err));
        remove(root_path + '/generated_local/updatables', cont(err));
        cb();};};
