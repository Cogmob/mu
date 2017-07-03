'use strict';

// file: unbrace/find_multiline_opened_and_closed

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('lodash/fp'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_lodashfp, ERR, wordwrap) {
    var _ = function _(line) {
        return module_lodashfp.reduce(line, function (acc, symbol) {
            if (!'(){}[]'.includes(symbol)) return acc;
            if ('({['.includes(symbol)) {
                acc.opened.unshift(symbol);
                return acc;
            }
            if (acc.opened[0] === '(' && symbol === ')' || acc.opened[0] === '{' && symbol === '}' || acc.opened[0] === '[' && symbol === ']') {
                acc.opened.shift();
                return acc;
            }
            acc.closed.push(symbol);
            return acc;
        }, { opened: [], closed: [] });
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */