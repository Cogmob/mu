const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');

const create = require('../create/_');
const get_metadata = require('../shared/get_metadata');
const _ = require('./_');

test('[module]', {timeout: 9000}, t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();};

    const mu_src_path = __dirname + '/../..';

    create(mu_src_path, __dirname, 'test_project', 2000, cont(err));
    get_metadata(__dirname + '/test_project', cont(err, info));
    _(mu_src_path, __dirname + '/test_project', info, cont(err));

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