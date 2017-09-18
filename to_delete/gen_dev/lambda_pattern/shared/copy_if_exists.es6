// file: shared/copy_if_exists

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    ERR,
        wordwrap) => {
    const _ = (from, to, cb) => {
    const handle_response = () => {
        cb();};

    module_fsextra100.copy(from, to, handle_response);};

    return _;}).catch((err) => {console.log(err);});
