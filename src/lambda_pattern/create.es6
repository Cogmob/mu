const fs = require('fs-extra');
const date = require('date-and-time');
const ls = require('ls');
const path = require('path');
const git = require('simple-git');

const replace_in_file = require('../file_io_utils/replace_in_file');
const move_file = require('../file_io_utils/move_file');

const create = (root_path, project_name, cb) => {
    clone(root_path, project_name, cont());
    project_path = path.resolve(root_path, project_name);
    remove_git_folder(project_path, cont(err));
    rename_licence(project_path, cont(err));
    rename_to_project_name(project_path, project_name, cont(err));
    /*
    git_init(project_path, cont(err));
   */

    cb('');};

const clone = (root_path, project_name, cb) => {
    git(root_path).clone(
        'git@bitbucket.org:Cogbot/node_base.git',
        project_name,
        cont());
    cb();};

const remove_git_folder = (project_path, cb) => {
    git_path = path.resolve(project_path, '.git');
    fs.remove(git_path, cont(err));
    cb();};

const rename_licence = (project_path, cb) => {
    const year = date.format(new Date(), 'YYYY');
    replace_in_file(project_path, 'LICENCE.md', 'yyyy', year, cont(err));
    cb();};

const rename_to_project_name = (project_path, project_name, cb) => {
    console.log(project_path);
    move_file(
        project_path,
        path.join('src', 'module'),
        path.join('src', project_name),
        cont(err));

    move_file(
        project_path,
        path.join('src', project_name, 'func.es6'),
        path.join('src', project_name, project_name + '.es6'),
        cont(err));

    move_file(
        project_path,
        path.join('src', project_name, 'func_test.es6'),
        path.join('src', project_name, project_name + '_test.es6'),
        cont(err));

    cb();};

module.exports = create;
