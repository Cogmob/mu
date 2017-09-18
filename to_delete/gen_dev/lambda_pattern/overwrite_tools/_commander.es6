// file: overwrite_tools/_commander

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
    const _ = (commander, mu_src_path) => {
    const success_message =
            'replaced the tools scripts';
    commander
        .command('overwrite tools')
        .description('replace the tools.js file with the last built tools')
        .action((project_name) => {
            console.log(success_message);});};

    return _;}).catch((err) => {console.log(err);});
