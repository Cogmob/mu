var jspm, q, promises;
'use strict';
jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
promises = [
  jspm.import('commander'),
  require('./../commander_add/_'),
  jspm.import('async-stacktrace'),
  jspm.import('wordwrap')
];
module.exports = q.all(promises).spread(function (module_commander, local_include_commander_add_, ERR, wordwrap) {
  var _;
  _ = function _(updatables, config) {
    var err;
    local_include_commander_add_(module_commander, __dirname, function (arguments, _$param0) {
      err = _$param0;
      if (ERR(err, cb)) {
        return;
      }
      module_commander.parse(process.argv);
    }.bind(this, arguments));
  };
  return _;
}).catch(function (err) {
  console.log(err);
});
/* Generated by Continuation.js v0.1.7 */