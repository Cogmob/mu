// file: diff/dump_set_up

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('bash-color'),
    jspm.import('chalk'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_bashcolor,
    module_chalk,
    ERR,
        wordwrap) => {
    const _ = i => {
    if (!('format_funcs' in i) || !i.format_funcs) i.format_funcs = {
        none: i => {return i},
        red: module_bashcolor.blue,
        green: module_bashcolor.green,
        blue: i => {
            return module_chalk.styles.bold.open
                + i + module_chalk.styles.bold.close;}};

    if (!i.expected) i.expected = '';
    if (!i.generated) i.generated = '';
    if (!('format' in i)) i.format = a => {return a};
    if (!('path' in i)) i.path = [];

    return i;};

    return _;}).catch((err) => {console.log(err);});
