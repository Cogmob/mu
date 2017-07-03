// file: lambda_pattern/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('commander'),
    // load local
    require('./_test_commander'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_commander,
    local_include__test_commander,
    ERR,
        wordwrap) => {
    const _ = () => {};





if (require.main === module) {
    local_include__test_commander(module_commander);
    module_commander.parse(process.argv);}

    return _;}).catch((err) => {console.log(err);});
