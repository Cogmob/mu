const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const test = require('tape');
const path = require('path');
const serialfs = require('serialfs');
const set_lambda_state_version = require('./set_lambda_state_version');

test('set lambda state version', (t) => {
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

    set_lambda_state_version(
        path.resolve(__dirname, 'before'),
        12345,
        cont(err));
            if (ERR(err, cb)) {
                return;}
                

    serialfs.obj(__dirname + '/before', {}, cont(err, generated));
            if (ERR(err, cb)) {
                return;}
                
    serialfs.obj(__dirname + '/expected', {}, cont(err, expected));
            if (ERR(err, cb)) {
                return;}
                
    cb(null, generated, expected);});
