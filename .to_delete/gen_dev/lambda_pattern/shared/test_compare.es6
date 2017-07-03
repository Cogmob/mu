// file: shared/test_compare

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('bluebird'),
    jspm.import('bash-color'),
    // load local
    require('./../diff/_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_bluebird,
    module_bashcolor,
    local_include_diff_,
    ERR,
        wordwrap) => {
    const _ = (test_name, expected, generated) => {
    const diff = local_include_diff_(expected, generated);
    if (!diff) return module_bluebird.resolve(
        module_bashcolor.green('test ' + test_name + ' passed'));
    return module_bluebird.reject(
        module_bashcolor.red('test ' + test_name + ' failed') + '\n\n' + diff);};

    return _;}).catch((err) => {console.log(err);});
