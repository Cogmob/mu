const fs = require('fs-extra');
const read_file = fs.readFile;
const remove = fs.remove;
const mkdir = fs.mkdirp;
const copy = fs.copy;
const yaml = require('js-yaml');

const download_updatables = require('../set_updatables_version/_');
const copy_if_exists = require('../shared/copy_if_exists');
const make_package_json = require('../shared/make_package_json');

const _ = (mu_src_path, root_path, metadata, cb) => {
    const gen_path = root_path + '/generated_local/project';
    remove(gen_path, cont(err));
    mkdir(gen_path, cont(err));
    copy_if_exists(root_path + '/submodules', gen_path, cont(err));
    copy(root_path + '/_.es6', gen_path + '/_.es6', cont(err));
    copy(root_path + '/__test.es6', gen_path + '/__test.es6', cont(err));
    download_updatables(mu_src_path, root_path, 'HEAD', cont(err));
    read_file(root_path + '/meta/npm_dependencies.yaml', cont(err, deps));
    read_file(
        root_path + '/meta/npm_dev_dependencies.yaml', cont(err, dev_deps));
        /*
         * TODO: Copy behaviour from set_up/tools.es6
    make_package_json(
        mu_src_path,
        metadata,
        gen_path,
        yaml.safeLoad(deps),
        yaml.safeLoad(dev_deps),
        cont(err));

    console.log('===== install 1 starting');
    install(gen_path, cont(err));
    console.log('===== install 1 finished');
   */
    cb();};
