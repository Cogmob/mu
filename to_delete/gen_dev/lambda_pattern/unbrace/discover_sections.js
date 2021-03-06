'use strict';

// file: unbrace/discover_sections

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (ERR, wordwrap) {
    var _ = function _(acc, line) {
        if (!acc) {
            acc = { stack: [], ret: [] };
        }

        line.multiline_symbols.closed.map(function () {
            return acc.stack.shift();
        });
        line.multiline_symbols.opened.map(function (i) {
            return acc.stack.push(i);
        });
        console.log(acc.stack);
        acc.ret.push([line.line, acc.stack]);
        return acc;
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */