const fs = require('fs-extra');
const path = require('path');
const git = require('simple-git');

const create = (root, parent_path, project_name, cb) => {
    fs.remove(path.resolve(parent_path, project_name), cont(err)); if (err) {return cb(err);};

    fs.copy(
        path.resolve(root, 'src', 'create', 'skeleton'),
        path.resolve(parent_path, project_name),
        cont(err)); if (err) {return cb(err);};

    const subrepo_path = path.resolve(root, 'subrepo_for_updatables');

    ensure_subrepo_exists(subrepo_path, cont(err)); if (err) {return cb(err);};

    git(subrepo_path).checkout('master', cont(err)); if (err) {return cb(err);};

    fs.copy(
        path.resolve(subrepo_path, 'gen', 'release', 'updatables'),
        path.resolve(parent_path, project_name, 'gen', '.updatables'),
        cont(err)); if (err) {return cb(err);};

    cb(null);};

const ensure_subrepo_exists = (subrepo_path, cb) => {
    fs.exists(subrepo_path, cont(subrepo_exists));

    if (subrepo_exists) {
        return cb(null);}

    git('.').clone(
        'git@github.com:Cogmob/lambda_pattern_es6.git',
        subrepo_path,
        cb);};

module.exports = create;
