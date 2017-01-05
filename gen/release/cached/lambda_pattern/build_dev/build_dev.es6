const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');

const move_if_exists = require('../shared/move_if_exists');

const modify_es6 = require('./modify_es6');
const convert_es6 = require('./convert_es6');
const modify_main_file = require('./modify_main_file');
const build_tools = require('./build_tools');

const build_dev = (root_path, project_name, cb) => {
    // TODO: handle errors without leaving node_modules in wrong place
    // TODO: replace with config file for what will be saved as in spec
    
    const gen_path = root_path + '/generated_local';
    const proj_path = gen_path + '/project';
    move_if_exists(
        proj_path + '/node_modules',
        gen_path + '/project_node_modules',
        cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.remove(proj_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.mkdirp(proj_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.copy(root_path + '/.es6', proj_path + '/.es6', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.copy(root_path + '/_test.es6', proj_path + '/_test.es6', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.copy(root_path + '/submodules', proj_path + '/submodules', cont(err));
            if (ERR(err, cb)) {
                return;}
                

    move_if_exists(
        root_path + '/project_node_modules',
        proj_path + '/node_modules',
        cont(err));
            if (ERR(err, cb)) {
                return;}
                

    modify_es6(proj_path, project_name, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    modify_main_file(proj_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    convert_es6(proj_path, project_name, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    cb(null);};

module.exports = build_dev;
