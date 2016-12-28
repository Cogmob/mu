const test = require('tape');
const rsv = require('path').resolve;
const serialfs = require('serialfs');

const overwrite_tools = require('./overwrite_tools');
const create = require('../create/create');

test('overwrite tools', (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}
    create(__dirname, 'test_project', 2000, cont(err));
    overwrite_tools(rsv(__dirname, 'test_project'), cont(err));
    serialfs.obj(rsv(__dirname, 'before'), cont(err, generated));
    serialfs.obj(rsv(__dirname, 'expected'), cont(err, expected));
    cb(null, generated, expected);});
