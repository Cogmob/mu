const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');

const create = (src_path, root, project_name, year, cb) => {
    const skel_path = src_path + '/lambda_pattern/skeleton_data';
    const gen_path = root + '/' + project_name;
    fs.copy(skel_path, gen_path, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.readFile(gen_path + '/readme.md', 'utf8', cont(err, readme));
            if (ERR(err, cb)) {
                return;}
                
    readme = readme.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/readme.md', readme, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.readFile(gen_path + '/.es6', 'utf8', cont(err, index));
            if (ERR(err, cb)) {
                return;}
                
    index = index.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/.es6', index, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.readFile(gen_path + '/_test.es6', 'utf8', cont(err, test_file));
            if (ERR(err, cb)) {
                return;}
                
    test_file = test_file.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/_test.es6', test_file, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.readFile(gen_path + '/meta/data.yaml', 'utf8', cont(err, meta));
            if (ERR(err, cb)) {
                return;}
                
    meta = meta.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/meta/data.yaml', meta, cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.ensureDir(gen_path + '/gen/dev', cont(err));
            if (ERR(err, cb)) {
                return;}
                

    cb(null);};

module.exports = create;
