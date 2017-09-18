// file: shared/wordwrap

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('wordwrap'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_wordwrap,
    ERR,
        wordwrap) => {
    const _ = (indent, text) => {
    if (!text) text = 'undefined';
    return '.   ' + module_wordwrap(0, 81)(text.split('\n').join('\n.   '))
        .split('\n').map(
            (stack_line) => {return indent + stack_line}).join('\n');};

    return _;}).catch((err) => {console.log(err);});
