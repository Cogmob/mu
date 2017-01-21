const fs = require('fs-extra');
const yaml = require('js-yaml');

const find_project_root = require('./find_project_root');

const get_metadata = (path, cb) => {
    fs.readFile(path + '/meta/data.yaml', 'utf8', cont(err, metadata));
    cb(null, yaml.safeLoad(metadata), root);}

module.exports = get_metadata;
