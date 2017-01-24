const mkdir = require('fs-extra').mkdirp;

const download_updatables = require('../set_updatables_version/_');

const make_project = require('./project');
const make_tools = require('./tools');

const _ = (mu_src_path, root_path, metadata, cb) => {
    mkdir(root_path + '/generated_local', cont(err));
    download_updatables(mu_src_path, root_path, 'HEAD', cont(err));
    make_project(mu_src_path, root_path, metadata, cont(err));
    make_tools(mu_src_path, root_path, metadata, cb);};

module.exports = _;
