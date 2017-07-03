// file: unbrace/find_multiline_opened_and_closed

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('lodash/fp'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_lodashfp,
    ERR,
        wordwrap) => {
    const _ = line => {
    return module_lodashfp.reduce(
        line,
        (acc, symbol) => {
            if (!'(){}[]'.includes(symbol)) return acc;
            if ('({['.includes(symbol)) {
                acc.opened.unshift(symbol);
                return acc;}
            if (
                    (acc.opened[0] === '(' && symbol === ')')
                    || (acc.opened[0] === '{' && symbol === '}')
                    || (acc.opened[0] === '[' && symbol === ']')) {
                acc.opened.shift();
                return acc;}
            acc.closed.push(symbol);
            return acc;},
        {opened: [], closed: []});};

    return _;}).catch((err) => {console.log(err);});
