const fs = require('fs-extra');
const path = require('path');

const create = (root, parent_path, project_name, cb) => {
    fs.remove(path.resolve(parent_path, project_name), cont(err));

    fs.copy(
        path.resolve(root, 'src', 'create', 'skeleton'),
        path.resolve(parent_path, project_name),
        cont(err));

    const subrepo_path = path.resolve(root, 'subrepo_for_updatables');
    fs.exists(subrepo_path, cont(subrepo_exists));

    if (!subrepo_exists) {
        console.log('ok');}

    //fs.copy(
    //    path.resolve(appRoot.toString(), 'updatables'),
    //    path.resolve(parent_path, project_name, 'gen', '.updatables'),
    //    cont(err));
    cb(null);};

module.exports = create;
