const git = require('simple-git');
const fs = require('fs-extra');
const path = require('path');

const update_updateables = (root, project_path, cb) => {
    // TODO: expected version for updatables
    const g = git(path.resolve(project_path, 'gen', '.updatables'))
    g.pull();
    g.checkout('master', cb);};

module.exports = update_updateables;
