var test, path, lambda_pattern;
'use strict';
test = require('tape');
path = require('path');
lambda_pattern = require('./lambda_pattern');
test.only('full process', function (t) {
  var res;
  process.chdir(path.resolve('test_project'));
  process.argv = [
    'store',
    'bitbucket'
  ];
  lambda_pattern(function (arguments, _$param0) {
    res = _$param0;
    t.equals(res, '');
    t.end();
  }.bind(this, arguments));
});
/* Generated by Continuation.js v0.1.7 */