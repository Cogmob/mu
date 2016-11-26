const fs = require('fs-extra');
const yaml = require('js-yaml');
const path = require('path');
const git = require('simple-git');

const create = (root, parent_path, project_name, cb) => {
    const project_path = path.resolve(parent_path, project_name);

    fs.remove(project_path, cont(err));

    fs.copy(
        path.resolve(root, 'src', 'create', 'skeleton'),
        project_path,
        cont(err));

    const subrepo_path = path.resolve(root, 'cached', 'subrepo_for_updatables');

    ensure_subrepo_exists(subrepo_path, cont(err));

    console.log('before');
    console.log(subrepo_path);
    git(subrepo_path).checkout('master', cont(err));
    console.log('after');

    fs.copy(
        path.resolve(subrepo_path, 'gen', 'release', 'updatables'),
        path.resolve(project_path, 'gen', 'updatables'),
        cont(err));

    const managed_path = path.resolve(
        root, 'cached', 'current_managed_projects');

    fs.ensureFile(managed_path, cont(err));
    fs.readFile(managed_path, 'utf8', cont(err, dotfile));
    dotfile = yaml.load(dotfile)
    if (!(dotfile instanceof Array)) {
        dotfile = [];}

    if (dotfile.indexOf(project_name) === -1) {
        dotfile.push(project_name);}

    fs.writeFile(managed_path, yaml.dump(dotfile), cb);};

const ensure_subrepo_exists = (subrepo_path, cb) => {
    fs.exists(subrepo_path, cont(subrepo_exists));

    if (subrepo_exists) {
        return cb(null);}

    fs.ensureDir(subrepo_path);

    git('.').clone(
        'git@github.com:Cogmob/lambda_pattern_es6.git',
        subrepo_path,
        cb);};

module.exports = create;
