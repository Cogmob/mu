const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');

const create = require('../create/_');
const set_updatables_version = require('./_');

test('create and set updatables version', {timeout: 9000}, t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();};

    const mu_src_path = __dirname + '/../..';

    create(mu_src_path, __dirname, 'test_project', 2000, cont(err));

    const commit = 'df3c86442b5e9a05e471e0e90f9188bd372f7e48';
    set_updatables_version(
        mu_src_path,
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
        __dirname + '/expected_data', contents,
        cont(err, expected));
    cb(null, generated, expected);});
