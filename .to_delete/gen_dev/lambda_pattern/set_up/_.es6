// file: set_up/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    // load local
    require('./../shared/jp'),
    require('./../set_updatables_version/_'),
    require('./project'),
    require('./tools'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    local_include_sharedjp,
    local_include_set_updatables_version_,
    local_include_project,
    local_include_tools,
    ERR,
        wordwrap) => {
        const import_make_dirmkdirp = module_fsextra100.mkdirp;
const _ = (mu_src_path,  root_path,  metadata,  cb) => {
    return  local_include_sharedjp(
        import_make_dirmkdirp(root_path  +  '/generated_local'),
        local_include_set_updatables_version_(mu_src_path,  root_path,  'HEAD'),
        local_include_project(mu_src_path,  root_path,  metadata),
        local_include_tools(mu_src_path, root_path, metadata));};

    return _;}).catch((err) => {console.log(err);});
