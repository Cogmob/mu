const fs = require('fs-extra');
const ls = require('ls');
const path = require('path');

const create = (cb) => {
    const git = require('simple-git')();
    git.clone('git@bitbucket.org:Cogbot/node_base.git', 'node_base', () => {
        console.log(ls(process.cwd()));
        fs.remove(path.resolve(
                process.cwd(), 'lambda_pattern', 'node_base', '.git'
        ), (err) => {
            if (err) {
                cb(err);
            }
            cb('');});});
};

module.exports = create;
