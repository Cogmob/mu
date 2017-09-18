// file: shared/jp

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('lodash/fp'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_lodashfp,
    ERR,
        wordwrap) => {
    const _ = (...promises)  => {
    console.log(promises);
    return  module_lodashfp.reduce((acc,  promise)  =>  acc.then(promise),  promises);};

    return _;}).catch((err) => {console.log(err);});
