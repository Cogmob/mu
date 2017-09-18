// file: set_up/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('bluebird'),
    // load local
    require('./../shared/jp'),
    require('./../create/_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_bluebird,
    local_include_sharedjp,
    local_include_create_,
    ERR,
        wordwrap) => {
    const _ = () => {
    const  mu_src_path  =  __dirname  +  '/../..';
    const  contents = {
        gen: {
            '.gitignore':  true,
            dev:  {lambda_updatables: {
                example_version:  true,
                'LICENCE.md':  true}},
            stored:  {'lambda_state_history.yaml':  true}}};
    var gen, exp;
    return  local_include_sharedjp(
        local_include_create_(mu_src_path,  __dirname,  'test_project',  2000),
 
 
 
 
 
 
 
 
        module_bluebird.resolve('a'));};

    return _;}).catch((err) => {console.log(err);});
