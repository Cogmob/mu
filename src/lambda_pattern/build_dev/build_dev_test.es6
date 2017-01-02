const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');
const resolve = require('path').resolve;

const create = require('../create/create');
const set_up = require('../set_up/set_up');
const build_dev = require('./build_dev');
const set_updatables_version = require('../set_updatables_version/set_updatables_version');

test('build dev', t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();};

    create(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));

    fs.copy(__dirname + '/test_module_data',
            __dirname + '/test_project/src/test_project/test_module',
            cont(err));
    const metadata = {project_name: 'test_project'};
    set_up(__dirname + '/..', __dirname + '/test_project', metadata, cont(err));
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
                    'test_project_test.es6': false,
                    'test_project_test.js': false,
                    'test_project.es6': false,
                    'test_project.js': false,
                    'metadata.yaml': false }}},
            stored: {'lambda_state_history.yaml': true}}};

    const recurse = {gen: {dev: {lambda_updatables: false}}};

    const generated = serialfs.obj(
        __dirname + '/test_project', contents, recurse,
        cont(err, generated));
    const expected = serialfs.obj(
        __dirname + '/expected_data', contents, recurse,
        cont(err, expected));
    cb(null, generated, expected);});