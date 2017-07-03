'use strict';

// file: shared/test_compare

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('bluebird'), jspm.import('bash-color'),
// load local
require('./../diff/_'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_bluebird, module_bashcolor, local_include_diff_, ERR, wordwrap) {
    var _ = function _(test_name, expected, generated) {
        var diff = local_include_diff_(expected, generated);
        if (!diff) return module_bluebird.resolve(module_bashcolor.green('test ' + test_name + ' passed'));
        return module_bluebird.reject(module_bashcolor.red('test ' + test_name + ' failed') + '\n\n' + diff);
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */