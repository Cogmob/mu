var ERR, word_wrap, get_metadata, build_dev, build_dev_commander;
'use strict';
ERR = require('async-stacktrace');
word_wrap = require('word-wrap');
get_metadata = require('../shared/get_metadata');
build_dev = require('./build_dev');
build_dev_commander = function build_dev_commander(commander, cb) {
  commander.command('build_dev').description('builds the dev folder ready to run the tests').action(function (project_name) {
    var err, metadata, root;
    get_metadata(function (arguments, _$param0, _$param1, _$param2) {
      err = _$param0;
      metadata = _$param1;
      root = _$param2;
      if (ERR(err, cb)) {
        return;
      }
      build_dev(root, metadata['project_name'], 2000, function (err) {
        return console.log('created project \'' + project_name + '\'');
      });
    }.bind(this, arguments));
  });
};
module.exports = build_dev_commander;
/* Generated by Continuation.js v0.1.7 */