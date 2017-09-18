// file: shared/get_metadata

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
const _ = (root_path)  => {
    return import_read_filereadFile(root_path + '/meta/data.yaml', 'utf8')
        .then(metadata => module_jsyaml370.safeLoad(metadata));};

    return _;}).catch((err) => {console.log(err);});
