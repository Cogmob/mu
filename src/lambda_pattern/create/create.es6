const fs = require('fs-extra');
const path = require('path');

const add_updatables = require('./add_updatables');
const modify_dotfile = require('./modify_dotfile');

const create = (root, parent_path, project_name, cb) => {
    const project_path = path.resolve(parent_path, project_name);

    fs.remove(project_path, cont(err));

    fs.copy(
        path.resolve(root, 'src', 'create', 'skeleton'),
        project_path,
        cont(err));

    add_updatables(root, project_path, cont(err));

    modify_dotfile(root, project_name, cb);};

module.exports = create;
