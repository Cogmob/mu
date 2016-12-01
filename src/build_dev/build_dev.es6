const fs = require('fs-extra');
const path = require('path');

const update_updatables = require('../shared/update_updatables');
const overwrite_tools = require('../overwrite_tools/overwrite_tools');

const build_dev = (root, project_path, cb) => {
    update_updatables(root, project_path, cont(err));
    overwrite_tools(root, project_path, cont(err));
    fs.ensureDir(path.resolve(project_path, 'gen', 'dev'));
    const tools_path = path.resolve(
        project_path, 'gen', 'stored', 'tools_scripts', 'current');
    const tools = require(tools_path);
    tools.build_dev(root, project_path, cb);};

module.exports = build_dev;
