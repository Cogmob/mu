// file: overwrite_tools/get_info

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    jspm.import('js-yaml@^3.7.0'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    module_jsyaml370,
    ERR,
        wordwrap) => {
        const import_read_filereadFile = module_fsextra100.readFile;
const _ = (root_path, cb) => {
    import_read_filereadFile(
        root_path + '/generated_local/lambda_updatables/version',
        'utf8',
        cont(err, updatables_version));
                if (ERR(err, cb)) {
                    return;}
                    

    import_read_filereadFile(
        root_path + '/generated/lambda_state_history.yaml',
        'utf8',
        cont(err, history));
                if (ERR(err, cb)) {
                    return;}
                    

    history = module_jsyaml370.safeLoad(history);

    cb(null, updatables_version, history);}

    return _;}).catch((err) => {console.log(err);});
