var jspm, q, promises;
'use strict';
jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
promises = [
  jspm.import('fs-extra@^1.0.0'),
  jspm.import('async-stacktrace'),
  jspm.import('wordwrap')
];
module.exports = q.all(promises).spread(function (module_fsextra100, ERR, wordwrap) {
  var import_read_filereadFile, import_write_filewriteFile, _;
  import_read_filereadFile = module_fsextra100.readFile;
  import_write_filewriteFile = module_fsextra100.writeFile;
  _ = function _(root_path, cb) {
    var err, main_file;
    import_read_filereadFile(root_path + '/_.es6', function (arguments, _$param0, _$param1) {
      err = _$param0;
      main_file = _$param1;
      if (ERR(err, cb)) {
        return;
      }
      main_file = main_file + '\n        if (!module.parent) {\n            lambda_pattern(function (er) {\n                if (er) {\n                   console.log(er.toString());\n                }\n            });\n        }';
      import_write_filewriteFile(root_path + '/_.es6', main_file, cb);
    }.bind(this, arguments));
  };
  return _;
}).catch(function (err) {
  console.log(err);
});
/* Generated by Continuation.js v0.1.7 */