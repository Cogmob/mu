// file: diff/get_current_diff

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
    const _ = (diff, path) => {
    return module_lodashfp.reduce(
        diff,
        (acc, val) => {
            if (acc) return acc;
            if (!('path' in val)) return val;
            if (module_lodashfp.isEqual(val.path, path)) return val;},
        null)};

    return _;}).catch((err) => {console.log(err);});
