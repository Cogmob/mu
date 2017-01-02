const fs = require('fs-extra');
const npm = require('npm');

const download_updatables = require('../shared/download_updatables');
const make_package_json = require('../shared/make_package_json');

const set_up = (src_path, root, metadata, cb) => {
    const project_name = metadata['project_name'];
    fs.remove(root + '/gen/dev', cont(err));
    fs.mkdirp(root + '/gen/dev', cont(err));
    fs.copy(root + '/src', root + '/gen/dev/src', cont(err));
    download_updatables(src_path, root, 'HEAD', cont(err));
    const deps = {'a': '^1.0.0', 'b': '^1.0.0'};
    const dev_deps = {'c': '^1.0.0', 'd': '^1.0.0'};
    make_package_json(src_path, metadata, root + '/gen/dev', deps, dev_deps, cont(err));
    /**
   **/
   /**
    npm.load({prefix: root + '/gen/dev/src/'}, cont(err));
    npm.install(cont(err));
    npm.load({prefix: root + '/gen/dev/src/' + project_name}, cont(err));
    npm.install(cont(err));
    **/

    cb();}

module.exports = set_up;
