const test = require('tape');
const serialfs = require('serialfs');

const [[project_name]] = require('./test_project');

test('[[project_name]]', t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();}

    cb(null, 1, 2);});
