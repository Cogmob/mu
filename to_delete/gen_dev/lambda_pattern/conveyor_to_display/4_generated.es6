// file: conveyor_to_display/4_generated

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('astring'),
    jspm.import('bluebird'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_astring,
    module_bluebird,
    ERR,
        wordwrap) => {
    const _ = files => {
    const ret = [];
    for (var file of files) {
        try {
            ret.push({
                path: file['path'],
                contents: module_astring.generate(file['contents'], {
                    indent: '    ', lineEnd: '\n'})});
        } catch(err) {return module_bluebird.reject(err);}}
    return module_bluebird.resolve(ret);};

    return _;}).catch((err) => {console.log(err);});
