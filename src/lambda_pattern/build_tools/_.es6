const fs = require('fs-extra');

const move_if_exists = require('../shared/move_if_exists');
const copy_if_exists = require('../shared/copy_if_exists');
const modify_es6 = require('./modify_es6');
const convert_es6 = require('../shared/convert_es6');
const webpack = require('./webpack');

const _ = (root, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    move_if_exists(
        root + '/generated_local/tools/node_modules',
        root + '/generated_local/tools_node_modules',
        cont(err));

    fs.remove(root + '/generated_local/tools', cont(err));
    copy_if_exists(root + '/tools', root + '/generated_local/tools', cont(err));

    move_if_exists(
        root + '/generated_local/tools_node_modules',
        root + '/generated_local/tools/node_modules',
        cont(err));

    modify_es6(root + '/generated_local/tools', cont(err));
    convert_es6(root + '/generated_local/tools', cont(err));
    console.log('++++ webpack for tools start');
    webpack(root + '/generated_local/tools', cont(err));
    console.log('++++ webpack for tools finished');

    cb(null);};
