// file: diff/dump_array

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
    const arr = i.obj;
    const path = i.path;
    var current_diff_i = null;
    if (i.current_diff) current_diff_i = i.current_diff.index;
    i.current_diff = null;
    return module_lodashfp.times(arr.length, n => {
            i.path = module_lodashfp.clone(path)
            i.path.push(n);
            i.obj = arr[n];
            var item_str = dump(i);
            if (n === current_diff_i) {
                item_str = i.format_funcs.blue(item_str);
            }
            return '- ' + item_str.replace(/\n/g, '\n  ');})
        .join('\n');}

    return _;}).catch((err) => {console.log(err);});
