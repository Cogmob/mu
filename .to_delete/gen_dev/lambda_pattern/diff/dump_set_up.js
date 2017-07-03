'use strict';

// file: diff/dump_set_up

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('bash-color'), jspm.import('chalk'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_bashcolor, module_chalk, ERR, wordwrap) {
    var _ = function _(i) {
        if (!('format_funcs' in i) || !i.format_funcs) i.format_funcs = {
            none: function none(i) {
                return i;
            },
            red: module_bashcolor.blue,
            green: module_bashcolor.green,
            blue: function blue(i) {
                return module_chalk.styles.bold.open + i + module_chalk.styles.bold.close;
            } };

        if (!i.expected) i.expected = '';
        if (!i.generated) i.generated = '';
        if (!('format' in i)) i.format = function (a) {
            return a;
        };
        if (!('path' in i)) i.path = [];

        return i;
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */