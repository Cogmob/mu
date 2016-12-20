const extract = require('tarball-extract').extractTarball;
const archive = require('git-download-archive');
const fs = require('fs-extra');

const download_updatables = (path, version, cb) => {
    const move_updatables = () => {
        extract(
            path + '/gen/dev/updatables.tar',
            path + '/gen/dev/updatables',
            cont(err));
        fs.remove(path + '/gen/dev/lambda_updatables', cont(err));
        fs.move(
            path + '/gen/dev/updatables/repo/gen/release/updatables',
            path + '/gen/dev/lambda_updatables',
            cont(err));
        fs.remove(path + '/gen/dev/updatables.tar', cont(err));
        fs.remove(path + '/gen/dev/updatables', cont(err));
        cb();};

    archive(__dirname + '/../../../../../.git', {
        rev: version,
        format: 'tar'})
    .on('error', (err) => cb(err))
    .on('end', move_updatables)
    .pipe(fs.createWriteStream(path + '/gen/dev/updatables.tar'));};

module.exports = download_updatables;
