const extract = require('ext-tar').tar.extract;
const tar = require('tar-fs')
const rsv = require('path').resolve;
const archive = require('git-archive')
const fs = require('fs-extra');
const path = require('path');

const find_project_root = require('../shared/find_project_root');

const download_updatables = (src_path, root, version, cb) => {
    const cleanup = () => {
            console.info('c');
            fs.remove(root + '/generated_local/lambda_updatables', cont(err));
            console.info('d');
            fs.move(
                root + '/generated_local/updatables/gen/release/updatables',
                root + '/generated_local/lambda_updatables',
                cont(err));
            console.info('e');
            fs.remove(root + '/generated_local/updatables.tar', cont(err));
            console.info('f');
            fs.remove(root + '/generated_local/updatables', cont(err));
            cb();};

    const move_updatables = () => {
        console.info('a');
        fs.mkdirp(root + '/generated_local/updatables', cont(err));
        console.info('b');
        fs.createReadStream(root + '/generated_local/updatables.tar')
            .pipe(tar.extract(
                root + '/generated_local/updatables',
                {
                    ignore: (name) => {
                        console.info(name);
                        return path.extname(name) === '.bin';}}))
            .on('finish', cleanup)
            .on('error', er => ERR(er, cb));};

    fs.mkdirp(root + '/generated_local', cont(err));
    find_project_root(src_path, cont(err, tool_root));
    archive({
        repoPath: tool_root + '/.git',
        commit: version,
        outputPath: root + '/generated_local/updatables.tar'})
    .then(move_updatables)
    .fail('error', er => ERR(er, cb));};

module.exports = download_updatables;
