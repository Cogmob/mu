const test = require('tape');
const path = require('path');
const lambda_pattern = require('./lambda_pattern');

test('full process', t => {
    console.log(lambda_pattern);
    t.end();
});
