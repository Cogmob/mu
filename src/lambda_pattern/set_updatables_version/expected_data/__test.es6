const test = require('tape');
const serialfs = require('serialfs');

const test_project = require('./test_project');

test('[module]', t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();}

    cb(null, 1, 2);});
