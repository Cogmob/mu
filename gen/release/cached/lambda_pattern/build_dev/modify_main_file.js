var ERR, word_wrap, fs, rsv, modify_main_file;
'use strict';
ERR = require('async-stacktrace');
word_wrap = require('word-wrap');
fs = require('fs-extra');
rsv = require('path').resolve;
modify_main_file = function modify_main_file(root_path, cb) {
  var main_path, err, main_file;
  main_path = root_path + '/.es6';
  fs.readFile(main_path, function (arguments, _$param0, _$param1) {
    err = _$param0;
    main_file = _$param1;
    if (ERR(err, cb)) {
      return;
    }
    main_file = main_file + '\nif (!module.parent) {\n    lambda_pattern(function (er) {\n        if (er) {\n           console.log(er.toString());\n        }\n    });\n}';
    fs.writeFile(main_path, main_file, cb);
  }.bind(this, arguments));
};
module.exports = modify_main_file;
/* Generated by Continuation.js v0.1.7 */