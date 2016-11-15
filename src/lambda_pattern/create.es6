const fs = require('fs-extra');
const ls = require('ls');
const path = require('path');

const create = (cb) => {
    if (!process.argv[1]) {
        return 'no project name given';}
    const git = require('simple-git')();
    git.clone('git@bitbucket.org:Cogbot/node_base.git', process.argv[1], () => {
        console.log(ls(process.cwd()));
        fs.remove(path.resolve(
                process.cwd(), 'lambda_pattern', process.argv[1], '.git'
        ), (err) => {
            if (err) {
                cb(err);
            }
            cb('');});});
};

module.exports = create;
