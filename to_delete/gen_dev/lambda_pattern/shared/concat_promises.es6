// file: shared/concat_promises

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('bluebird'),
    jspm.import('lodash/fp'),
    jspm.import('bash-color'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_bluebird,
    module_lodashfp,
    module_bashcolor,
    ERR,
        wordwrap) => {
    const _ = (title, promises) => {
    return module_bluebird.all(module_lodashfp.map(promises, promise => {
        return promise.then(
                i => {return module_bluebird.resolve([false, i]);},
                i => {return module_bluebird.resolve([true, i]);});}))
                B
            .then(results => {
                console.log(1234);
                const [reject, strings] = module_lodashfp.reduce(
                    (acc, result) => {
                        return [
                            acc[0] || result[0],
                            acc[1].concat(result[1])];},
                    results,
                    [
                        false,
                        [module_bashcolor.blue('\n' + title + '\n')]]);
                console.log('5678');
                if (reject) return module_bluebird.reject(strings.join('\n'));
                return module_bluebird.resolve(strings.join('\n'));});};

    return _;}).catch((err) => {console.log(err);});
