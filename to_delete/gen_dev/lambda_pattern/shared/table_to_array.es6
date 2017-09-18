// file: shared/table_to_array

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
    const _ = (key_name, table) => {
    return module_lodashfp.values(module_lodashfp.mapValues(table, (val, key) => {
        val[key_name] = key;
        return val;}));}

    return _;}).catch((err) => {console.log(err);});
