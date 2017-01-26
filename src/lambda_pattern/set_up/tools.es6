const fs = require('fs-extra');
const read_file = fs.readFile;
const remove = fs.remove;
const mkdir = fs.mkdirp;
const copy = fs.copy;
const NPM = require('npm-helper');
const yaml = require('js-yaml');

const copy_if_exists = require('../shared/copy_if_exists');
const make_package_json = require('../shared/make_package_json');

const _ = (mu_src_path, root_path, metadata, cb) => {
    const gen_path = root_path + '/generated_local/tools';
    remove(gen_path, cont(err));
    mkdir(gen_path, cont(err));
    copy_if_exists(root_path + '/tools', gen_path, cont(err));
    read_file(
        root_path + '/tools/npm_dev_dependencies.yaml', cont(err, dev_deps));
    mkdir(root_path + '/generated/tools', cont(err));
    make_package_json(
        mu_src_path,
        metadata,
        root_path + '/generated/tools',
        {},
        yaml.safeLoad(dev_deps),
        cont(err));

    const npm = new NPM();
    npm.cwd(root_path + '/generated/tools');
    npm.createNodeModulesDirectory();
    npm.install(cb);};
