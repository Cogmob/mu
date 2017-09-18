// file: diff/dump_table

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
    const _ = (i, dump) => {
    const path = i.path;
    const table = i.obj;
    var current_diff_i = null;
    if (i.current_diff) current_diff_i = i.current_diff.index;
    i.current_diff = null;
    var ret = module_lodashfp.values(module_lodashfp.mapValues(i.obj, (val, key) => {
            i.path = module_lodashfp.clone(path);
            i.path.push(key);
            i.obj = table[key];
            var item_str = dump(i);
            return key + ': ' + item_str.replace(/\n/g, '\n  ');}))
        .join('\n');
    return ret;}

    return _;}).catch((err) => {console.log(err);});
