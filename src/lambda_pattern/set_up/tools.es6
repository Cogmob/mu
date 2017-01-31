const fs = require('fs-extra');
const read_file = fs.readFile;
const remove = fs.remove;
const mkdir = fs.mkdirp;
const copy = fs.copy;
const exec = require('child_process').exec;
const install_packages = require('pnpm').installPkgs;
const install = require('pnpm').install;
const link_from_global = require('pnpm').linkFromGlobal;
const yaml = require('js-yaml');

const copy_if_exists = require('../shared/copy_if_exists');
const make_package_json = require('../shared/make_package_json');

const _ = (mu_src_path, root, metadata, cb) => {
    const gen_path = root + '/generated_local/tools';
    remove(gen_path, cont(err));
    mkdir(gen_path, cont(err));
    copy_if_exists(root + '/tools', gen_path, cont(err));
    read_file(
        root + '/tools/npm_dev_dependencies.yaml', 'utf8', cont(err, dev_deps));
    mkdir(root + '/generated/tools', cont(err));

    make_package_json(
        mu_src_path,
        metadata,
        root + '/generated/tools',
        [],
        yaml.safeLoad(dev_deps),
        cont(err));

    console.log('dev deps');
    console.log(dev_deps);
    const deps = yaml.safeLoad(dev_deps);
    const packages = Object.keys(deps).join(' ');
    console.log(packages);
    console.log('====== install 2 started');
        //link_from_global(dep, {cwd: root, flatTree: true});});
    exec('pnpm i ' + packages, {
        cwd: root + '/generated/tools'}, cont(err));

    /*
    Object.keys(deps).forEach(dep => {
        link_from_global(dep, {cwd: root, flatTree: true});});
       */
    console.log('====== install 2 finished');
    console.log('====== install 3 started');
    copy(
        root + '/generated/tools/node_modules',
        gen_path + '/node_modules',
        cont(err));
    console.log('====== install 3 finished');
    cb();
};
