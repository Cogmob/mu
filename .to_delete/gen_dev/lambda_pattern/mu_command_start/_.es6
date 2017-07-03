// file: mu_command_start/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load local
    require('./ensure_git_exists'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        local_include_ensure_git_exists,
    ERR,
        wordwrap) => {
    const _ = mu_src_path => {
    local_include_ensure_git_exists(mu_src_path);};

    return _;}).catch((err) => {console.log(err);});
