const extract = require('tarball-extract').extractTarball;
const archive = require('git-download-archive');
const fs = require('fs-extra');

const download_updatables = (tool_root, root, version, cb) => {
    const move_updatables = () => {
        extract(
            root + '/gen/dev/updatables.tar',
            root + '/gen/dev/updatables',
            cont(err));
        fs.remove(root + '/gen/dev/lambda_updatables', cont(err));
        fs.move(
            root + '/gen/dev/updatables/repo/gen/release/updatables',
            root + '/gen/dev/lambda_updatables',
            cont(err));
        fs.remove(root + '/gen/dev/updatables.tar', cont(err));
        fs.remove(root + '/gen/dev/updatables', cont(err));
        cb();};

    archive(tool_root + '/.git', {
        rev: version,
        format: 'tar'})
    .on('error', (err) => cb(err))
    .on('end', move_updatables)
    .pipe(fs.createWriteStream(root + '/gen/dev/updatables.tar'));};

module.exports = download_updatables;
