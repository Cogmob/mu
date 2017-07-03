// file: conveyor_to_display/1_pre_ast

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('glob-promise'),
    jspm.import('read-files-promise'),
    jspm.import('bluebird'),
    // load local
    require('./../shared/reject'),
    require('./../shared/zip'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_globpromise,
    module_readfilespromise,
    module_bluebird,
    local_include_sharedreject,
    local_include_sharedzip,
    ERR,
        wordwrap) => {
    const _ = path => {
    path = path.replace(/\\/g, '/');
    var paths;
    return module_globpromise(path + '/**/*.es6')
        .then((filenames) => {
            paths = filenames.map(filename => {
                return filename.replace(path + '/', '');});
            return module_readfilespromise(filenames, 'utf8');}, local_include_sharedreject)
        .then((files) => {
            files = local_include_sharedzip('path', paths, 'contents', files);
            return module_bluebird.resolve(files);}, local_include_sharedreject);};

    return _;}).catch((err) => {console.log(err);});
