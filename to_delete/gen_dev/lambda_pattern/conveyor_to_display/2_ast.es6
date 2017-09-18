// file: conveyor_to_display/2_ast

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('acorn'),
    jspm.import('bluebird'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_acorn,
    module_bluebird,
    ERR,
        wordwrap) => {
    const _ = files => {
    const ret = [];
    for (var file of files) {
        try {
            ret.push({
                path: file['path'],
                contents: module_acorn.parse(file['contents'], {
                    range: true,
                    loc: true,
                    ecmaVersion: 6,
                    sourcetype: 'module'})});
        } catch(err) {return module_bluebird.reject(err);}}
    return module_bluebird.resolve(ret);};

    return _;}).catch((err) => {console.log(err);});
