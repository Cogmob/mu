const fs = require('fs-extra');

const move_if_exists = require('../shared/move_if_exists');
const copy_if_exists = require('../shared/copy_if_exists');
const modify_es6 = require('./modify_es6');
const convert_es6 = require('../shared/convert_es6');
const webpack = require('./webpack');

const _ = (root_path, project_name, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    const gen_path = root_path + '/generated_local';
    const proj_path = gen_path + '/tools';
    move_if_exists(
        proj_path + '/node_modules',
        gen_path + '/tools_node_modules',
        cont(err));

    fs.remove(proj_path, cont(err));

    copy_if_exists(
        root_path + '/tools',
        proj_path,
        cont(err));

    move_if_exists(
        root_path + '/tools_node_modules',
        proj_path + '/node_modules',
        cont(err));

    modify_es6(proj_path, project_name, cont(err));
    convert_es6(proj_path, project_name, cont(err));
    webpack(proj_path, cont(err));

    cb(null);};

module.exports = _;
