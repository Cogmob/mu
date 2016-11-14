const test = require('tape');
const lambda_pattern = require('./lambda_pattern');

test.only('create', t => {
    console.log('creating');
    process.chdir('src/lambda_pattern');
    process.argv = ['create'];
    lambda_pattern((res) => {
        t.equals(res, '');
        t.end();
    });
    process.chdir('..');
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
