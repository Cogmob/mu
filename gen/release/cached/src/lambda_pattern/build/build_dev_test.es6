const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const test = require('tape');
const root = require('app-root-path').toString();
const path = require('path');

const create = require('../create/create');
const build_dev = require('./build_dev');
  
/*
test('build_dev', t => {
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
    var full_path = path.resolve('.', 'src', 'build_dev');
    create(root, full_path, 'test_project', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    full_path = path.resolve(full_path, 'test_project');
    build_dev(root, full_path, cb);});
   */
