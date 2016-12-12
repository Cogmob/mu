const test = require('tape');
const root = require('app-root-path').toString();
const path = require('path');

const create = require('../create/create');
const build_dev = require('./build_dev');
  
test('build_dev', t => {
    t.plan(1);
    const cb = (err) => {
        t.notOk(err);};
    var full_path = path.resolve('.', 'src', 'build_dev');
    create(root, full_path, 'test_project', cont(err));
    full_path = path.resolve(full_path, 'test_project');
    build_dev(root, full_path, cb);});
