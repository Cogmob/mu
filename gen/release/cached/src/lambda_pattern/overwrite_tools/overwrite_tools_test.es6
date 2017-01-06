const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const test = require('tape');
const rsv = require('path').resolve;
const serialfs = require('serialfs');

const overwrite_tools = require('./overwrite_tools');
const set_up = require('../set_up/set_up');
const create = require('../create/create');
const build_dev = require('../build_dev/build_dev');

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
    create(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));
            if (ERR(err, cb)) {
                return;}
                
    const metadata = {project_name: 'test_project'};
    set_up(__dirname + '/..', __dirname + '/test_project', metadata, cont(err));
            if (ERR(err, cb)) {
                return;}
                
    build_dev(__dirname + '/test_project', 'test_project', cont(err));
            if (ERR(err, cb)) {
                return;}
                
    overwrite_tools(rsv(__dirname, 'test_project'), cont(err));
            if (ERR(err, cb)) {
                return;}
                
    const recurse = {gen: {dev: {lambda_updatables: false}}};
    serialfs.obj(
        rsv(__dirname, 'test_project'),
        false,
        recurse,
        cont(err, generated));
            if (ERR(err, cb)) {
                return;}
                
    serialfs.obj(
        rsv(__dirname, 'expected'),
        false,
        recurse,
        cont(err, expected));
            if (ERR(err, cb)) {
                return;}
                
    cb(null, generated, expected);});
