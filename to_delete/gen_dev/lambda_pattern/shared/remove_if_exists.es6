// file: shared/remove_if_exists

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('remove_path'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_remove_path,
    ERR,
        wordwrap) => {
    const _ = (path, cb) => {
    const handle_response = () => {
        cb();};

    module_remove_path(path, handle_response);};

    return _;}).catch((err) => {console.log(err);});
