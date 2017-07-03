// file: conveyor_to_display/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load local
    require('./1_pre_ast'),
    require('./2_ast'),
    require('./4_generated'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        local_include_1_pre_ast,
    local_include_2_ast,
    local_include_4_generated,
    ERR,
        wordwrap) => {
    const _ = {
    '1_pre_ast': local_include_1_pre_ast,
    '2_ast': local_include_2_ast,
    '4_generated': local_include_4_generated};

    return _;}).catch((err) => {console.log(err);});
