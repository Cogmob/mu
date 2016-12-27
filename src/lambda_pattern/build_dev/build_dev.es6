const fs = require('fs-extra');
const move_if_exists = require('../shared/move_if_exists');
const es6 = require('./es6');

const build_dev = (root_path, project_name, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place

    // TODO: replace with config file for what will be saved as in spec
    move_if_exists(
        root_path + '/gen/dev/src/' + project_name + '/node_modules',
        root_path + '/gen/dev/project_node_modules',
        cont(err));

    move_if_exists(
        root_path + '/gen/dev/src/node_modules',
        root_path + '/gen/dev/tools_node_modules',
        cont(err));

    fs.remove(root_path + '/gen/dev/src', cont(err));

    fs.copy(
        root_path + '/src',
        root_path + '/gen/dev/src',
        cont(err));

    move_if_exists(
        root_path + '/project_node_modules',
        root_path + '/gen/dev/src/' + project_name + '/node_modules',
        cont(err));

    move_if_exists(
        root_path + '/tools_node_modules',
        root_path + '/gen/dev/src/node_modules',
        cont(err));

    es6(root_path + '/gen/dev/src/' + project_name, project_name, cont(err));
    es6(root_path + '/gen/dev/src/tools', project_name, cont(err));

        /*
    'es6',
    'tools_es6',
    'main_file',
    'backup_gulpfile',
    'build_tools',
    'build_lambda_pattern_tool',
    'send_built_tools_to_release'));
   */
    cb(null);};

module.exports = build_dev;
