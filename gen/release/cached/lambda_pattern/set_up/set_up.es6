const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const npm = require('npm');

const download_updatables = require('../shared/download_updatables');
const copy_if_exists = require('../shared/copy_if_exists');
const make_package_json = require('../shared/make_package_json');

const set_up = (src_path, root, metadata, cb) => {
    const project_name = metadata['project_name'];
    const gen_path = root + '/generated_local/project';
    fs.remove(gen_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.mkdirp(gen_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    copy_if_exists(root + '/submodules', gen_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.copy(root + '/.es6', gen_path + '/.es6', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    fs.copy(root + '/_test.es6', gen_path + '/_test.es6', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    download_updatables(src_path, root, 'HEAD', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    const deps = {'a': '^1.0.0', 'b': '^1.0.0'};
    const dev_deps = {'c': '^1.0.0', 'd': '^1.0.0'};
    make_package_json(src_path, metadata, gen_path, deps, dev_deps, cont(err));
            if (ERR(err, cb)) {
                return;}
                
   /**
    npm.load({prefix: root + '/gen/dev/src/'}, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    npm.install(cont(err));
            if (ERR(err, cb)) {
                return;}
                
    npm.load({prefix: root + '/gen/dev/src/' + project_name}, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    npm.install(cont(err));
            if (ERR(err, cb)) {
                return;}
                
    **/

    cb();}

module.exports = set_up;
