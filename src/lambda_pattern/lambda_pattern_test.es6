const test = require('tape');
const path = require('path');
const lambda_pattern = require('./lambda_pattern');

test.only('create', t => {
    process.chdir(path.resolve('src', 'lambda_pattern'));
    process.argv = ['create', 'test_project'];
    lambda_pattern(cont(res));
    console.log('res:');
    console.log(res);
    t.equals(res, '');
    t.end();
    process.chdir('../..');
});

test('init', t => {
    //t.ok(true);
    console.log('initialising');
    t.end();
});

test('build dev', t => {
    t.end();
});

test('test dev', t => {
    t.end();
});

test('build release', t => {
    t.end();
});

test('test release', t => {
    t.end();
});

test('publish', t => {
    t.end();
});
