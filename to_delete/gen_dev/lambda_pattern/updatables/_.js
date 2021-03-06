'use strict';

// file: updatables/_

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load local
require('./../conveyor_to_display/_'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (local_include_conveyor_to_display_, ERR, wordwrap) {
    var _ = { build_all: build_all, functions: functions };

    var build_all = function build_all(commander, mu_src_path, config) {};

    var functions = {
        conveyor_to_display: local_include_conveyor_to_display_ };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */