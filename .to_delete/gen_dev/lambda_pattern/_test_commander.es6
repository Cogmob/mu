// file: lambda_pattern/_test_commander

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load local
    require('./_test'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        local_include__test,
    ERR,
        wordwrap) => {
    const _ = (commander) => {
    const success_message =
            'tests complete';
    commander
        .command('test')
        .description('run all tests')
        .action(() => {
            local_include__test(cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
            console.log(success_message);});};

    return _;}).catch((err) => {console.log(err);});
