const fs = require('fs-extra');
const date = require('date-and-time');
const ls = require('ls');
const path = require('path');

const create = (cb) => {
    if (!process.argv[1]) {
        return 'no project name given';}

    clone(cont());

    remove_git_folder(cont(err));
    if (err) {cb(err);}

    rename_licence(cont(err));
    if (err) {cb(err);}

    cb('');};

const clone = (cb) => {
    const git = require('simple-git')();
    git.clone(
        'git@bitbucket.org:Cogbot/node_base.git',
        process.argv[1],
        cont());
    cb();};

const remove_git_folder = (cb) => {
    git_path = path.resolve(process.cwd(), process.argv[1], '.git');
    fs.remove(git_path, cont(err));
    cb(err);};

const rename_licence = (cb) => {
    licence_path = path.resolve(process.cwd(), process.argv[1], 'LICENCE.md');
    fs.readFile(licence_path, 'utf8', cont(err, data));
    if (err) {cb(err);};
    const year = date.format(new Date(), 'YYYY');
    fs.writeFile(licence_path, data.replace('yyyy', year), cont(err));
    cb(err);};

module.exports = create;
