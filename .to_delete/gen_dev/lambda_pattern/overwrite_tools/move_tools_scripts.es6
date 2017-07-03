// file: overwrite_tools/move_tools_scripts

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    // load local
    require('./../shared/move_if_exists'),
    require('./move_if_exists'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    local_include_sharedmove_if_exists,
    local_include_move_if_exists,
    ERR,
        wordwrap) => {
    const _ = (root_path, updatables_version, cb) => {
    const move_if_exists = local_include_sharedmove_if_exists;

    module_fsextra100.mkdirp(
        root_path + '/generated/tools/stored',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    local_include_move_if_exists(
        root_path + '/generated/tools/_.js',
        root_path + '/generated/tools/stored/' + updatables_version + '.js',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    module_fsextra100.move(
        root_path + '/generated_local/tools/__built.js',
        root_path + '/generated/tools/_.js',
        cb);}

    return _;}).catch((err) => {console.log(err);});
