const fs = require('fs-extra');
const yaml = require('js-yaml');

const find_project_root = require('./find_project_root');

const get_metadata = (cb) => {
    find_project_root(process.cwd(), cont(err, root));
    fs.readFile(root + '/src/metadata.yaml', 'utf8', cont(err, metadata));
    cb(null, yaml.safeLoad(metadata), root);}

module.exports = get_metadata;
