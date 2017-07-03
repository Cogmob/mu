'use strict';

// file: diff/dump

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('lodash/fp'),
// load local
require('./dump_set_up'), require('./get_current_diff'), require('./dump_array'), require('./dump_table'), require('./dump_val'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_lodashfp, local_include_dump_set_up, local_include_get_current_diff, local_include_dump_array, local_include_dump_table, local_include_dump_val, ERR, wordwrap) {
    var _ = function _(i) {
        i = local_include_dump_set_up(i);
        i.current_diff = local_include_get_current_diff(i.diff, i.path);

        var ff = i.format_funcs.none;
        if (i.current_diff) {
            var kind = i.current_diff.kind;
            if (kind === 'E') ff = i.format_funcs.blue;
            if (kind === 'N') ff = i.format_funcs.green;
            if (kind === 'D') ff = i.format_funcs.red;
        }

        if (module_lodashfp.isArray(i.obj)) return ff(local_include_dump_array(i, _));
        if (module_lodashfp.isObject(i.obj)) return ff(local_include_dump_table(i, _));
        return ff(local_include_dump_val(i));
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */