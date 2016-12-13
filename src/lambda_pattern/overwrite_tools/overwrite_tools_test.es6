const test = require('tape');
const path = require('path');
const serialfs = require('serialfs');
const overwrite_tools = require('./overwrite_tools');

test('overwrite tools', (t) => {
    const cb = (err, generated, expected) => {
        if (err) {
            console.log(word_wrap(err.stack.replace(/\\/g, '\\ '), {
                trim: true,
                width: 80})
            .split('\n').forEach((stack_line) => {
                console.log(stack_line
                    .replace(/\\ /g, '\\')
                    .replace(/ at/g, '\nat')
                    .replace(/Error:/g, '\nError:'));}));
            t.fail();
            return t.end();}

        t.deepEqual(expected, generated);
        t.end();}
    overwrite_tools(path.resolve(__dirname, 'before'), cont(err));
    serialfs.obj(path.resolve(__dirname, 'before'), cont(err, generated));
    serialfs.obj(path.resolve(__dirname, 'expected'), cont(err, expected));
    cb(null, generated, expected);});
