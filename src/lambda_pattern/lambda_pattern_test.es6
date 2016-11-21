const test = require('tape');
const path = require('path');
const lambda_pattern = require('./lambda_pattern');

test.only('full process', t => {
    //process.chdir(path.resolve('src', 'lambda_pattern'));

    // create
//    process.argv = ['create', 'test_project'];
//    lambda_pattern(cont(res));
//    t.equals(res, '');

    // create
    process.argv = ['store', 'bitbucket'];
    lambda_pattern(cont(res));
    t.equals(res, '');

    t.end();
    process.chdir('../..');
});
