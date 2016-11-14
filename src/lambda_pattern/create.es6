const fs = require('fs-extra');

const create = (cb) => {
    const git = require('simple-git')();
    git.clone('git@bitbucket.org:Cogbot/node_base.git', 'node_base', () => {
        fs.remove('node_base/.git', (err) => {
            if (err) {
                cb(err);
            }
            cb('');});});
};

module.exports = create;
