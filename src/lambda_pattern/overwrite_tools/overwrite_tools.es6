const fs = require('fs-extra');
const lambda_state_history = require('../shared/lambda_state_history');
const path = require('path')

const overwrite_tools = (root, project_path, cb) => {
    fs.copy(
        path.resolve(root, 'src/tools/tools.js'),
        path.resolve(project_path, 'gen/stored/tools_scripts/current.js'),
        cb);};

module.exports = overwrite_tools;
