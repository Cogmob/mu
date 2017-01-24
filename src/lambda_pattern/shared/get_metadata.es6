const fs = require('fs-extra');
const yaml = require('js-yaml');

const find_project_root = require('./find_project_root');

const _ = (root_path, cb) => {
    fs.readFile(root_path + '/meta/data.yaml', 'utf8', cont(err, metadata));
    cb(null, yaml.safeLoad(metadata), root_path);}
