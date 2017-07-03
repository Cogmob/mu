// file: shared/zip

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
    const _ = (key1, arr1, key2, arr2) => {
    var ret = [];
    for (var i = 0; i < arr1.length; i++) {
        var item = {};
        item[key1] = arr1[i];
        item[key2] = arr2[i];
        ret.push(item);};
    return ret;};

    return _;}).catch((err) => {console.log(err);});
