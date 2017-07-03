'use strict';

// file: overwrite_tools/_commander

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (ERR, wordwrap) {
    var _ = function _(commander, mu_src_path) {
        var success_message = 'replaced the tools scripts';
        commander.command('overwrite tools').description('replace the tools.js file with the last built tools').action(function (project_name) {
            console.log(success_message);
        });
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */