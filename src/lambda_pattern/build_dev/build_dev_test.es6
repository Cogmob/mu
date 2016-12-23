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
    const commit = 'df3c86442b5e9a05e471e0e90f9188bd372f7e48';
    set_updatables_version(__dirname + '/test_project', commit, cont(err));

    const generated = serialfs.obj(
        __dirname + '/test_project', {},
        cont(err, generated));
    const expected = serialfs.obj(
        __dirname + '/expected', {},
        cont(err, expected));
    cb(null, generated, expected);});
