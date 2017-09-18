// file: lambda_pattern/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('bluebird'),
    jspm.import('marked'),
    jspm.import('marked-terminal'),
    // load local
    require('./shared/concat_promises'),
    require('./set_up/_test'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_bluebird,
    module_marked,
    module_markedterminal,
    local_include_sharedconcat_promises,
    local_include_set_up_test,
    ERR,
        wordwrap) => {
    const _ = () => {
    module_bluebird.config({warnings: false, longStackTraces: false});
    module_marked.setOptions({renderer: new module_markedterminal()});

    local_include_sharedconcat_promises('test results:', [
 
 
 
        local_include_set_up_test
 
 
 
 
 
    ])
    .then(i => {console.log(i);})
    .catch(i => {console.log(i);});
};

    return _;}).catch((err) => {console.log(err);});
