const fs = require('fs-extra');
const date = require('date-and-time');
const ls = require('ls');
const path = require('path');
const git = require('simple-git');

const replace_in_file = require('../file_io_utils/replace_in_file');
const move_file = require('../file_io_utils/move_file');

const create = (root_path, project_name, cb) => {
    project_path = path.resolve(root_path, project_name);
    const year = date.format(new Date(), 'YYYY');

    fs.remove(path.resolve(root_path, project_name), cont(err)); if (err) {return cb(err);};

    git(root_path).clone(
        'git@bitbucket.org:Cogbot/node_base.git',
        project_name,
        cont());

    fs.remove(path.resolve(project_path, '.git'), cont(err)); if (err) {return cb(err);};

    replace_in_file([project_path, 'LICENCE.md'], 'yyyy', year, cont(err)); if (err) {return cb(err);};

    rename_to_project_name(project_path, project_name, cont(err)); if (err) {return cb(err);};

    git_init(project_path, cont(err)); if (err) {return cb(err);};

    fs.writeFile(
        path.resolve(project_path, '.git', 'info', 'exclude'),
        '.lvimrc',
        cont(err)); if (err) {return cb(err);};

    cb('');};

const rename_to_project_name = (project_path, project_name, cb) => {
    move_file(
        [project_path, 'src', 'module'],
        [project_path, 'src', project_name],
        cont(err)); if (err) {return cb(err);};

    move_file(
        [project_path, 'src', project_name, 'func.es6'],
        [project_path, 'src', project_name, project_name + '.es6'],
        cont(err)); if (err) {return cb(err);};

    move_file(
        [project_path, 'src', project_name, 'func_test.es6'],
        [project_path, 'src', project_name, project_name + '_test.es6'],
        cont(err)); if (err) {return cb(err);};

    cb();};

const git_init = (path, cb) => {
    git(path).init(cont(err)); if (err) {return cb(err);};
    git(path).add(['*'], cont(err)); if (err) {return cb(err);};
    git(path).commit('set up project structure', cont(err)); if (err) {return cb(err);};
    cb();};

module.exports = create;