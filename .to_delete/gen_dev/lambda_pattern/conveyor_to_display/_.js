'use strict';

// file: conveyor_to_display/_

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load local
require('./1_pre_ast'), require('./2_ast'), require('./4_generated'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (local_include_1_pre_ast, local_include_2_ast, local_include_4_generated, ERR, wordwrap) {
    var _ = {
        '1_pre_ast': local_include_1_pre_ast,
        '2_ast': local_include_2_ast,
        '4_generated': local_include_4_generated };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */