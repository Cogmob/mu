const fs = require('fs-extra');

const move_if_exists = require('../shared/move_if_exists');
const copy_if_exists = require('../shared/copy_if_exists');
const modify_es6 = require('./modify_es6');
const convert_es6 = require('../shared/convert_es6');
const modify_main_file = require('./modify_main_file');

const _ = (root_path, project_name, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    const gen_path = root_path + '/generated_local';
    const proj_path = gen_path + '/project';
    move_if_exists(
        proj_path + '/node_modules',
        gen_path + '/project_node_modules',
        cont(err));

    fs.remove(proj_path, cont(err));
    fs.mkdirp(proj_path, cont(err));

    fs.copy(root_path + '/_.es6', proj_path + '/_.es6', cont(err));
    fs.copy(root_path + '/_test.es6', proj_path + '/_test.es6', cont(err));
    copy_if_exists(
        root_path + '/submodules',
        proj_path + '/submodules',
        cont(err));

    move_if_exists(
        root_path + '/project_node_modules',
        proj_path + '/node_modules',
        cont(err));

    modify_es6(proj_path, project_name, cont(err));
    modify_main_file(proj_path, cont(err));
    convert_es6(proj_path, project_name, cont(err));

    cb(null);};

module.exports = _;
