const fs = require('fs-extra');
const npm = require('npm');

const download_updatables = require('../shared/download_updatables');
const copy_if_exists = require('../shared/copy_if_exists');
const make_package_json = require('../shared/make_package_json');

const set_up = (src_path, root, metadata, cb) => {
    const project_name = metadata['project_name'];
    const gen_path = root + '/generated_local/project';
    console.info(1);
    fs.remove(gen_path, cont(err));
    console.info(2);
    fs.mkdirp(gen_path, cont(err));
    console.info(3);
    copy_if_exists(root + '/submodules', gen_path, cont(err));
    console.info(4);
    fs.copy(root + '/_.es6', gen_path + '/_.es6', cont(err));
    console.info(5);
    fs.copy(root + '/_test.es6', gen_path + '/_test.es6', cont(err));
    console.info(6);
    download_updatables(src_path, root, 'HEAD', cont(err));
    console.info(7);
    const deps = {'a': '^1.0.0', 'b': '^1.0.0'};
    console.info(8);
    const dev_deps = {'c': '^1.0.0', 'd': '^1.0.0'};
    console.info(9);
    make_package_json(src_path, metadata, gen_path, deps, dev_deps, cont(err));
    console.info(10);
   /**
    npm.load({prefix: root + '/gen/dev/src/'}, cont(err));
    npm.install(cont(err));
    npm.load({prefix: root + '/gen/dev/src/' + project_name}, cont(err));
    npm.install(cont(err));
    **/

    cb();}

module.exports = set_up;
