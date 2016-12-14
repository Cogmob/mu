const word_wrap = require('word-wrap');
const test = require('tape');
const path = require('path');
const serialfs = require('serialfs');
const set_lambda_state_version = require('./set_lambda_state_version');

test('set lambda state version', (t) => {
    const cb = (err, generated, expected) => {
        t.deepEqual(expected, generated);
        t.end();}

    set_lambda_state_version(
        path.resolve(__dirname, 'before'),
        12345,
        cont(err));

    serialfs.obj(path.resolve(__dirname, 'before'), cont(err, generated));
    serialfs.obj(path.resolve(__dirname, 'expected'), cont(err, expected));
    cb(null, generated, expected);});
