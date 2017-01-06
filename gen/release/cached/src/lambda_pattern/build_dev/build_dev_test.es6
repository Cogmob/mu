const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const serialfs = require('serialfs');
const test = require('tape');
const resolve = require('path').resolve;

const create = require('../create/create');
const set_up = require('../set_up/set_up');
const build_dev = require('./build_dev');
const set_updatables_version = require('../set_updatables_version/set_updatables_version');

test.only('build dev', t => {
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

    create(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));
            if (ERR(err, cb)) {
                return;}
                

    fs.mkdirp(__dirname + '/test_project/submodules');
    fs.copy(__dirname + '/test_module_data',
            __dirname + '/test_project/submodules/test_module',
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
                

    // TODO: add extra comparisons for content
    // TODO: create deep equal function which doesn't hang on fail
    const contents = {
        gen: {
            '.gitignore': true,
            dev: {
                lambda_updatables: {
                    example_version: true,
                    'LICENCE.md': true},
                src: {test_project: {
                    'test_project_test.es6': false,
                    'test_project_test.js': false,
                    'test_project.es6': false,
                    'test_project.js': false,
                    'metadata.yaml': false }}},
            stored: {'lambda_state_history.yaml': true}}};

    const recurse = {gen: {dev: {lambda_updatables: false}}};

    const generated = serialfs.obj(
        __dirname + '/test_project', contents, recurse,
        cont(err, generated));
            if (ERR(err, cb)) {
                return;}
                
    const expected = serialfs.obj(
        __dirname + '/expected_data', contents, recurse,
        cont(err, expected));
            if (ERR(err, cb)) {
                return;}
                
    cb(null, generated, expected);});
