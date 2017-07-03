// file: overwrite_tools/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load local
    require('./get_info'),
    require('./move_tools_scripts'),
    require('./update_history'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        local_include_get_info,
    local_include_move_tools_scripts,
    local_include_update_history,
    ERR,
        wordwrap) => {
    const _ = (root_path, cb) => {
    const lambda_state_history = require('..' + ' lambda_state_history');
    const yaml = require('js-yaml');

    local_include_get_info(root_path, cont(err, updatables_version, history));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_move_tools_scripts(root_path, history['current_state_version'], cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_update_history(root_path, history, updatables_version, cont(err, history));
                if (ERR(err, cb)) {
                    return;}
                    
    cb();}

    return _;}).catch((err) => {console.log(err);});
