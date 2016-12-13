const test = require('tape');
const path = require('path');
const serialfs = require('serialfs');
const overwrite_tools = require('./set_lambda_version');

test.only('set lambda version', (t) => {
    const cb = (err, generated, expected) => {
        t.error(err);
        t.deepEqual(expected, generated);
        t.end();}
    overwrite_tools(path.resolve(__dirname, 'before'), cont(err));
    serialfs.obj(path.resolve(__dirname, 'before'), cont(err, generated));
    serialfs.obj(path.resolve(__dirname, 'expected'), cont(err, expected));
    cb(null, generated, expected);});
