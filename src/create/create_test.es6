const serialfs = require('serialfs');
const test = require('tape');
const path = require('path');
const create = require('./create');
const root = require('app-root-path').toString();

test('create skeleton', t => {
    t.plan(1);
    const cb = (err) => {
        t.notOk(err);};

    create(root, path.resolve('.', 'src', 'create'), 'test_project', cont(err));
    const root_path = path.resolve('.', 'src', 'create', 'test_project');
    serialfs.obj(root_path, {contents: false}, cont(err, created));
    cb(null);});
