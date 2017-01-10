const extract = require('tarball-extract').extractTarball;
const rsv = require('path').resolve;
const archive = require('git-archive')
const fs = require('fs-extra');

const find_project_root = require('../shared/find_project_root');

const download_updatables = (src_path, root, version, cb) => {
    const move_updatables = () => {
        fs.mkdirp(root + '/generated_local/updatables', cont(err));
        extract(
            root + '/generated_local/updatables.tar',
            root + '/generated_local/updatables',
            cont(err));
        fs.remove(root + '/generated_local/lambda_updatables', cont(err));
        fs.move(
            root + '/generated_local/updatables/gen/release/updatables',
            root + '/generated_local/lambda_updatables',
            cont(err));
        fs.remove(root + '/generated_local/updatables.tar', cont(err));
        fs.remove(root + '/generated_local/updatables', cont(err));
        cb();};

    fs.mkdirp(root + '/generated_local', cont(err));
    find_project_root(src_path, cont(err, tool_root));
    archive({
        repoPath: tool_root + '/.git',
        commit: version,
        outputPath: root + '/generated_local/updatables.tar'})
    .then(move_updatables)
    .fail('error', er => ERR(er, cb));};

module.exports = download_updatables;
