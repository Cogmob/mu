const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');

const create = require('../create/create');
const set_updatables_version = require('../set_updatables_version/set_updatables_version');

test('create and set updatables version', {timeout: 3000}, t => {
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
        
        t.deepEqual(generated, expected);
        t.end();};

    const src_path = __dirname + '/../..';

    create(src_path, __dirname, 'test_project', 2000, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    const commit = 'df3c86442b5e9a05e471e0e90f9188bd372f7e48';
    set_updatables_version(
        src_path,
        __dirname + '/test_project',
        commit,
        cont(err));
            if (ERR(err, cb)) {
                return;}
                

    const contents = {
        gen: {
            '.gitignore': true,
            dev: {lambda_updatables: {
                example_version: true,
                'LICENCE.md': true}},
            stored: {'lambda_state_history.yaml': true}}};

    const generated = serialfs.obj(
        __dirname + '/test_project', contents,
        cont(err, generated));
            if (ERR(err, cb)) {
                return;}
                
    const expected = serialfs.obj(
        __dirname + '/expected', contents,
        cont(err, expected));
            if (ERR(err, cb)) {
                return;}
                
    cb(null, generated, expected);});
