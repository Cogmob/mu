const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const serialfs = require('serialfs');
const test = require('tape');
const path = require('path');
const create = require('./create');
const root = require('app-root-path').toString();

/*
test('create skeleton', t => {
    t.plan(1);
    const cb = (err) => {
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
        
        t.notOk(err);};

    create(root, path.resolve('.', 'src', 'create'), 'test_project', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    const root_path = path.resolve('.', 'src', 'create', 'test_project');
    serialfs.obj(root_path, {contents: false}, cont(err, created));
            if (ERR(err, cb)) {
                return;}
                
    cb(null);});
   */
