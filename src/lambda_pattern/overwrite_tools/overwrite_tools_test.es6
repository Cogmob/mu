const test = require('tape');
const rsv = require('path').resolve;
const serialfs = require('serialfs');

const overwrite_tools = require('./overwrite_tools');
const create = require('../create/create');
const build_dev = require('../build_dev/build_dev');

test('overwrite tools', (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}
    create(__dirname, 'test_project', 2000, cont(err));
    build_dev(__dirname + '/test_project', 'test_project', cont(err));
    overwrite_tools(rsv(__dirname, 'test_project'), cont(err));
    const recurse = {gen: {dev: {lambda_updatables: false}}};
    serialfs.obj(
        rsv(__dirname, 'test_project'),
        false,
        recurse,
        cont(err, generated));
    serialfs.obj(
        rsv(__dirname, 'expected'),
        false,
        recurse,
        cont(err, expected));
    cb(null, generated, expected);});
