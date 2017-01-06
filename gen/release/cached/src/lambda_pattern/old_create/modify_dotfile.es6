const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs-extra');

const modify_dotfile = (root, project_name, cb) => {
    const managed_path = path.resolve(
        root, 'cached', 'current_managed_projects');

    fs.ensureFile(managed_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.readFile(managed_path, 'utf8', cont(err, dotfile));
            if (ERR(err, cb)) {
                return;}
                
    dotfile = yaml.load(dotfile)
    if (!(dotfile instanceof Array)) {
        dotfile = [];}

    if (dotfile.indexOf(project_name) === -1) {
        dotfile.push(project_name);}

    fs.writeFile(managed_path, yaml.dump(dotfile), cb);};

module.exports = modify_dotfile;
