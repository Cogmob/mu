// file: unbrace/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('bluebird'),
    // load local
    require('./before.txt'),
    require('./unbrace'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_bluebird,
    local_include_beforetxt,
    local_include_unbrace,
    ERR,
        wordwrap) => {
    const _ = () => {
    const before = local_include_beforetxt;
    local_include_unbrace(before);
    return module_bluebird.resolve();};

    return _;}).catch((err) => {console.log(err);});
