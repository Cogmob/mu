const word_wrap = require('word-wrap');
const test = require('tape');
const path = require('path');
const serialfs = require('serialfs');
const set_lambda_version = require('./set_lambda_version');

test.only('set lambda version', (t) => {
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
            //ERR(err);
            t.fail();
            return t.end();}
        t.deepEqual(expected, generated);
        t.end();}

    set_lambda_version(path.resolve(__dirname, 'before'), 12345, cont(err));
    serialfs.obj(path.resolve(__dirname, 'before'), cont(err, generated));
    serialfs.obj(path.resolve(__dirname, 'expected'), cont(err, expected));
    cb(null, generated, expected);});
