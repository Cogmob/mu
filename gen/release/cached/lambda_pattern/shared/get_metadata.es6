const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const yaml = require('js-yaml');

const find_project_root = require('./find_project_root');

const get_metadata = (cb) => {
    find_project_root(process.cwd(), cont(err, root));
            if (ERR(err, cb)) {
                return;}
                
    fs.readFile(root + '/src/metadata.yaml', 'utf8', cont(err, metadata));
            if (ERR(err, cb)) {
                return;}
                
    cb(null, yaml.safeLoad(metadata), root);}

module.exports = get_metadata;
