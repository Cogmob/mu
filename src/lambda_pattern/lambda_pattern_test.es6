const test = require('tape');
const path = require('path');
const lambda_pattern = require('./lambda_pattern');

test.only('full process', t => {

    // create
//    process.argv = ['create', 'test_project'];
//    lambda_pattern(cont(res));
//    t.equals(res, '');
//    process.chdir('../..');

    // create
    process.chdir(path.resolve('test_project'));
    process.argv = ['store', 'bitbucket'];
    lambda_pattern(cont(res));
    t.equals(res, '');

    t.end();
});
