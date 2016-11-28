const test = require('tape');
const root = require('app-root-path').toString();
const path = require('path');

const create = require('../create/create');
const build_dev = require('./build_dev');
  
test('build_dev', t => {
    t.plan(1);
    const cb = (err) => {
        console.log('done');
        t.notOk(err);};
    create(root, path.resolve('.', 'src', 'build_dev'), 'test_project', cb);
    build_dev(root, path.resolve('.', 'src', 'build_dev', 'test_project'));});
