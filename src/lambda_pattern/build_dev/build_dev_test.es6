const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');
const resolve = require('path').resolve;
const create = require('../create/create');
const build_dev = require('./build_dev');
const set_updatables_version = require('../set_updatables_version/set_updatables_version');

test('build dev', {timeout: 9000}, t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();};

    create(resolve(__dirname), 'test_project', 2000, cont(err));
    const commit = 'df3c86442b5e9a05e471e0e90f9188bd372f7e48';
    set_updatables_version(__dirname + '/test_project', commit, cont(err));
    fs.copy(__dirname + '/test_module_data',
            __dirname + '/test_project/src/test_project/test_module',
            cont(err));
    build_dev(__dirname + '/test_project', 'test_project', cont(err));

    // TODO: add extra comparisons for content
    // TODO: create deep equal function which doesn't hang on fail
    const contents = {
        gen: {
            '.gitignore': true,
            dev: {
                lambda_updatables: {
                    example_version: true,
                    'LICENCE.md': true},
                src: {test_project: {
                    'test_project_test.es6': true,
                    'test_project_test.js': true,
                    'test_project.es6': false,
                    'test_project.js': false,
                    'metadata.yaml': false }}},
            stored: {'lambda_state_history.yaml': true}}};

    const generated = serialfs.obj(
        __dirname + '/test_project', contents,
        cont(err, generated));
    const expected = serialfs.obj(
        __dirname + '/expected_data', contents,
        cont(err, expected));
    cb(null, generated, expected);});
