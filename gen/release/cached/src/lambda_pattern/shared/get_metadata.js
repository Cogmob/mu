var ERR, word_wrap, fs, yaml, find_project_root, get_metadata;
'use strict';
ERR = require('async-stacktrace');
word_wrap = require('word-wrap');
fs = require('fs-extra');
yaml = require('js-yaml');
find_project_root = require('./find_project_root');
get_metadata = function get_metadata(cb) {
  var err, root, metadata;
  find_project_root(process.cwd(), function (arguments, _$param0, _$param1) {
    err = _$param0;
    root = _$param1;
    if (ERR(err, cb)) {
      return;
    }
    fs.readFile(root + '/src/metadata.yaml', 'utf8', function (arguments, _$param2, _$param3) {
      err = _$param2;
      metadata = _$param3;
      if (ERR(err, cb)) {
        return;
      }
      cb(null, yaml.safeLoad(metadata), root);
    }.bind(this, arguments));
  }.bind(this, arguments));
};
module.exports = get_metadata;
/* Generated by Continuation.js v0.1.7 */