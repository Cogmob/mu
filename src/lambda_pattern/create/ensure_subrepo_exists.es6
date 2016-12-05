const fs = require('fs-extra');
const git = require('simple-git');

const ensure_subrepo_exists = (subrepo_path, cb) => {
    fs.exists(subrepo_path, cont(subrepo_exists));

    if (subrepo_exists) {
        return cb(null);}

    fs.ensureDir(subrepo_path);

    git('.').clone(
        'git@github.com:Cogmob/lambda_pattern_es6.git',
        subrepo_path,
        cb);};

module.exports = ensure_subrepo_exists;
