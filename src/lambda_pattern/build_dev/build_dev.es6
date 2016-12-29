const fs = require('fs-extra');
const rsv = require('path').resolve;

const move_if_exists = require('../shared/move_if_exists');

const modify_es6 = require('./modify_es6');
const convert_es6 = require('./convert_es6');
const modify_main_file = require('./modify_main_file');
const build_tools = require('./build_tools');

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

    const src_path = rsv(root_path, 'gen/dev/src', project_name);
    modify_es6(src_path, project_name, cont(err));
    modify_main_file(root_path, project_name, cont(err));
    convert_es6(src_path, project_name, cont(err));

    const tool_path = rsv(root_path, 'gen/dev/src/tools');
    modify_es6(tool_path, project_name, cont(err));
    convert_es6(tool_path, project_name, cont(err));

    build_tools(tool_path, cont(err));

    cb(null);};

module.exports = build_dev;
