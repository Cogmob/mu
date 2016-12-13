const git = require('simple-git');
const fs = require('fs-extra');
const ensure_subrepo_exists = require('./ensure_subrepo_exists');
const path = require('path');

const add_updatables = (root, project_path, cb) => {
    const subrepo_path = path.resolve(root, 'cached', 'subrepo_for_updatables');

    ensure_subrepo_exists(subrepo_path, cont(err));

    git(subrepo_path).checkout('master', cont(err));

    fs.copy(
        path.resolve(subrepo_path, 'gen', 'release', 'updatables'),
        path.resolve(project_path, 'gen', '.updatables'),
        cb);};

module.exports = add_updatables;
