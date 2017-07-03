// file: overwrite_tools/update_history

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    ERR,
        wordwrap) => {
        const import_write_filewriteFile = module_fsextra100.writeFile;
const _ = (root_path, history, updatables_version, cb) => {
    const state_version = history['newest_state_version'] + 1;
    history['current_state_version'] = state_version;
    history['newest_state_version'] = state_version;
    history['state_version_order'].push(state_version);
    history['states'][state_version] = {
        name: 'state',
        state_version: updatables_version.replace(/\n/g, ''),
        dev_built: false,
        dev_tests_passed: false,
        release_built: false,
        release_tests_passed: false};

    import_write_filewriteFile(
        root_path + '/generated/lambda_state_history.yaml',
        js-yaml.safeDump(history),
        'utf8',
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    cb(null, history);}

    return _;}).catch((err) => {console.log(err);});
