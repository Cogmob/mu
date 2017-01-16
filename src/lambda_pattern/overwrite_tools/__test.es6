const test = require('tape');
const rsv = require('path').resolve;
const serialfs = require('serialfs');

const overwrite_tools = require('./_');
const set_up = require('../set_up/_');
const create = require('../create/_');
const build_dev = require('../build_dev/_');

test('overwrite tools', (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}
    create(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));
    const metadata = {project_name: 'test_project'};
    set_up(__dirname + '/..', __dirname + '/test_project', metadata, cont(err));
    build_dev(__dirname + '/test_project', 'test_project', cont(err));
    overwrite_tools(__dirname + '/test_project', cont(err));
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
