const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');

const create = require('../create/create');
const set_updatables_version = require('../set_updatables_version/set_updatables_version');

test('create and set updatables version', {timeout: 3000}, t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();};

    const src_path = __dirname + '/../..';

    create(src_path, __dirname, 'test_project', 2000, cont(err));
    const commit = 'df3c86442b5e9a05e471e0e90f9188bd372f7e48';
    set_updatables_version(
        src_path,
        __dirname + '/test_project',
        commit,
        cont(err));

    const contents = {
        gen: {
            '.gitignore': true,
            dev: {lambda_updatables: {
                example_version: true,
                'LICENCE.md': true}},
            stored: {'lambda_state_history.yaml': true}}};

    const generated = serialfs.obj(
        __dirname + '/test_project', contents,
        cont(err, generated));
    const expected = serialfs.obj(
        __dirname + '/expected', contents,
        cont(err, expected));
    cb(null, generated, expected);});