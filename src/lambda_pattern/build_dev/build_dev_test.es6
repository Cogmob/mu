const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');
const resolve = require('path').resolve;
const create = require('../create/create');
const build_dev = require('./build_dev');
const set_updatables_version = require('../set_updatables_version/set_updatables_version');

test('build dev', {timeout: 3000}, t => {
    const cb = (err, generated, expected) => {
        for (const key in generated) {
            t.deepEqual(generated[key], expected[key], key);};
        t.end();};

    create(resolve(__dirname), 'test_project', 2000, cont(err));
    const commit = 'a447481209c32be0bcc84f1b418ad08c301df8f6';
    set_updatables_version(__dirname + '/test_project', commit, cont(err));

    const generated = get_results(
        __dirname + '/test_project',
        cont(err, generated));
    const expected = get_results(
        __dirname + '/expected',
        cont(err, expected));
    cb(null, generated, expected);});

const get_results = (root, cb) => {
    serialfs.obj(root + '/.', {contents: false},  cont(err, tree));
    fs.readFile(root + '/README.md', 'utf8', cont(err, readme));
    fs.readFile(root + '/LICENCE.md', 'utf8', cont(err, licence));
    fs.readFile(root + '/src/test_project/test_project.es6',
        'utf8', cont(err, index));
    fs.readFile(root + '/src/test_project/test_project_test.es6',
        'utf8', cont(err, test_file));
    fs.readFile(root + '/src/test_project/metadata.yaml',
        'utf8', cont(err, test_file));
    cb(null, {tree, readme, index, test_file});};
