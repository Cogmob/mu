// file: unbrace/discover_sections

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        ERR,
        wordwrap) => {
    const _ = (acc, line) => {
    if (!acc) {
        acc = {stack: [], ret: []};}
 
 
    line.multiline_symbols.closed.map(() => acc.stack.shift());
    line.multiline_symbols.opened.map(i => acc.stack.push(i));
    console.log(acc.stack);
    acc.ret.push([line.line, acc.stack]);
    return acc;};

    return _;}).catch((err) => {console.log(err);});
