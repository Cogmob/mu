// file: build_all/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('remove_path'),
    jspm.import('fs-extra@^1.0.0'),
    // load local
    require('./../shared/move_if_exists'),
    require('./../shared/copy_if_exists'),
    require('./modify_es6'),
    require('./modify_main_file'),
    require('./convert_es6'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_remove_path,
    module_fsextra100,
    local_include_sharedmove_if_exists,
    local_include_sharedcopy_if_exists,
    local_include_modify_es6,
    local_include_modify_main_file,
    local_include_convert_es6,
    ERR,
        wordwrap) => {
        const import_make_dirmkdirp = module_fsextra100.mkdirp;
    const import_copy_pathcopy = module_fsextra100.copy;
const _ = (root_path, cb) => {
    const move_if_exists = local_include_sharedmove_if_exists;
    const copy_if_exists = local_include_sharedcopy_if_exists;
 
 
    
    const gen_path = root_path + '/generated_local';
    const proj_path = gen_path + '/project';
    move_if_exists(
        proj_path + '/node_modules',
        gen_path + '/project_node_modules',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    module_remove_path(proj_path, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    import_make_dirmkdirp(proj_path, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    import_copy_pathcopy(
        root_path + '/_.es6',
        proj_path + '/_.es6',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    import_copy_pathcopy(
        root_path + '/__test.es6',
        proj_path + '/__test.es6',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    copy_if_exists(
        root_path + '/submodules',
        proj_path + '/submodules',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    move_if_exists(
        root_path + '/project_node_modules',
        proj_path + '/node_modules',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    local_include_modify_es6(proj_path, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_modify_main_file(proj_path, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_convert_es6(proj_path, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    cb(null);};

    return _;}).catch((err) => {console.log(err);});
