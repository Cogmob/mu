var gulp, project_tools, build_dev;
'use strict';
gulp = require('gulp');
project_tools = require('../lambda/tools.es6');
build_dev = function build_dev(project_path, modify_tools, cb) {
  var err;
  project_tools.before_build_dev(project_path, cb);
  build_code(project_path, function (arguments, _$param0) {
    err = _$param0;
    if (err) {
      return cb(err);
    }
    project_tools.after_build_dev(project_path, cb);
  }.bind(this, arguments));
};
/* Generated by Continuation.js v0.1.7 */