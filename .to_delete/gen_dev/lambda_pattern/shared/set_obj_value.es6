// file: shared/set_obj_value

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
    const _ = (obj, keys, val) => {
    var curr_obj = obj;
    const last_key = keys.pop();

    for (var key of keys) {
        if (!(key in curr_obj)) curr_obj[key] = {};
        curr_obj = curr_obj[key];}

    curr_obj[last_key] = val;

    return obj;};

    return _;}).catch((err) => {console.log(err);});
