var jspm, q, promises;
'use strict';
jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
promises = [
  require('./get_info'),
  require('./move_tools_scripts'),
  require('./update_history'),
  jspm.import('async-stacktrace'),
  jspm.import('wordwrap')
];
module.exports = q.all(promises).spread(function (local_include_get_info, local_include_move_tools_scripts, local_include_update_history, ERR, wordwrap) {
  var _;
  _ = function _(root_path, cb) {
    var lambda_state_history, yaml, err, updatables_version, history;
    lambda_state_history = require('..' + ' lambda_state_history');
    yaml = require('js-yaml');
    local_include_get_info(root_path, function (arguments, _$param0, _$param1, _$param2) {
      err = _$param0;
      updatables_version = _$param1;
      history = _$param2;
      if (ERR(err, cb)) {
        return;
      }
      local_include_move_tools_scripts(root_path, history['current_state_version'], function (arguments, _$param3) {
        err = _$param3;
        if (ERR(err, cb)) {
          return;
        }
        local_include_update_history(root_path, history, updatables_version, function (arguments, _$param4, _$param5) {
          err = _$param4;
          history = _$param5;
          if (ERR(err, cb)) {
            return;
          }
          cb();
        }.bind(this, arguments));
      }.bind(this, arguments));
    }.bind(this, arguments));
  };
  return _;
}).catch(function (err) {
  console.log(err);
});
/* Generated by Continuation.js v0.1.7 */