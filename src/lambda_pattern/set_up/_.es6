const fs = require('fs-extra');
const npm = require('npm');

const download_updatables = require('../set_updatables_version/_');
const copy_if_exists = require('../shared/copy_if_exists');
const make_package_json = require('../shared/make_package_json');

const [filename] = (src_path, root, metadata, cb) => {
    const project_name = metadata['project_name'];
    const gen_path = root + '/generated_local/project';
    fs.remove(gen_path, cont(err));
    fs.mkdirp(gen_path, cont(err));
    copy_if_exists(root + '/submodules', gen_path, cont(err));
    fs.copy(root + '/_.es6', gen_path + '/_.es6', cont(err));
    fs.copy(root + '/__test.es6', gen_path + '/__test.es6', cont(err));
    download_updatables(src_path, root, 'HEAD', cont(err));
    const deps = {'a': '^1.0.0', 'b': '^1.0.0'};
    const dev_deps = {'c': '^1.0.0', 'd': '^1.0.0'};
    make_package_json(src_path, metadata, gen_path, deps, dev_deps, cont(err));
   /**
    npm.load({prefix: root + '/gen/dev/src/'}, cont(err));
    npm.install(cont(err));
    npm.load({prefix: root + '/gen/dev/src/' + project_name}, cont(err));
    npm.install(cont(err));
    **/

    cb();}

module.exports = [filename];
