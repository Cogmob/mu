const test = require('tape');
const path = require('path');
const serialfs = require('serialfs');
const overwrite_tools = require('./overwrite_tools');

test('overwrite tools', (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}
    overwrite_tools(path.resolve(__dirname, 'before'), cont(err));
    serialfs.obj(path.resolve(__dirname, 'before'), cont(err, generated));
    serialfs.obj(path.resolve(__dirname, 'expected'), cont(err, expected));
    cb(null, generated, expected);});
