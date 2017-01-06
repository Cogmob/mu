const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const extract = require('tarball-extract').extractTarball;
const rsv = require('path').resolve;
const archive = require('git-download-archive');
const fs = require('fs-extra');

const find_project_root = require('../shared/find_project_root');

const download_updatables = (src_path, root, version, cb) => {
    const move_updatables = () => {
        extract(
            root + '/generated_local/updatables.tar',
            root + '/generated_local/updatables',
            cont(err));
            if (ERR(err, cb)) {
                return;}
                
        fs.remove(root + '/generated_local/lambda_updatables', cont(err));
            if (ERR(err, cb)) {
                return;}
                
        fs.move(
            root + '/generated_local/updatables/repo/gen/release/updatables',
            root + '/generated_local/lambda_updatables',
            cont(err));
            if (ERR(err, cb)) {
                return;}
                
        fs.remove(root + '/generated_local/updatables.tar', cont(err));
            if (ERR(err, cb)) {
                return;}
                
        fs.remove(root + '/generated_local/updatables', cont(err));
            if (ERR(err, cb)) {
                return;}
                
        cb();};

    find_project_root(src_path, cont(err, tool_root));
            if (ERR(err, cb)) {
                return;}
                
    archive(tool_root + '/.git', {
        rev: version,
        format: 'tar'})
    .on('error', (err) => cb(err))
    .on('end', move_updatables)
    .pipe(fs.createWriteStream(root + '/generated_local/updatables.tar'));};

module.exports = download_updatables;
