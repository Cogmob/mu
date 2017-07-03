// file: set_lambda_state_version/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    jspm.import('js-yaml@^3.7.0'),
    // load local
    require('./../set_updatables_version/_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    module_jsyaml370,
    local_include_set_updatables_version_,
    ERR,
        wordwrap) => {
        const import_read_filereadFile = module_fsextra100.readFile;
    const import_write_filewriteFile = module_fsextra100.writeFile;
    const import_move_pathmove = module_fsextra100.move;
const _ = (mu_src_path, root_path, version_number, cb) => {
    import_read_filereadFile(
        root_path + '/generated/lambda_state_history.yaml',
        'utf8',
        cont(err, history));
                if (ERR(err, cb)) {
                    return;}
                    
    history = module_jsyaml370.safeLoad(history);

    const updatables_num = history['states'][version_number]['state_version'];
    local_include_set_updatables_version_(
        mu_src_path,
        root_path,
        updatables_num,
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    import_write_filewriteFile(
        root_path + '/generated_local/lambda_updatables/version',
        history['states'][version_number]['state_version'] + '\n',
        'utf8',
        cont(err, version));
                if (ERR(err, cb)) {
                    return;}
                    

    import_move_pathmove(
        root_path + '/generated/tools.js',
        root_path + '/generated/tools/'
            + history['current_state_version'] + '.js',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    import_move_pathmove(
        root_path + '/generated/tools/' + version_number + '.js',
        root_path + '/generated/tools.js',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    history['current_state_version'] = version_number;
    import_write_filewriteFile(
        root_path + '/generated/lambda_state_history.yaml',
        yaml.safeDump(history),
        'utf8',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    cb();}

    return _;}).catch((err) => {console.log(err);});
