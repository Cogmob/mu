'use strict';

// file: diff/get_current_diff

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('lodash/fp'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_lodashfp, ERR, wordwrap) {
    var _ = function _(diff, path) {
        return module_lodashfp.reduce(diff, function (acc, val) {
            if (acc) return acc;
            if (!('path' in val)) return val;
            if (module_lodashfp.isEqual(val.path, path)) return val;
        }, null);
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */