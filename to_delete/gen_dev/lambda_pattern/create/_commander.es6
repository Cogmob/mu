// file: create/_commander

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('string-template@^1.0.0'),
    // load local
    require('./_'),
    require('./../shared/get_metadata'),
    require('./../set_up/_'),
    require('./../build/_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_stringtemplate100,
    local_include__,
    local_include_sharedget_metadata,
    local_include_set_up_,
    local_include_build_,
    ERR,
        wordwrap) => {
    const _ = (commander, mu_src_path) => {
    const success_message =
            'created project \'{name}\' in your current directory';
    const cb = (e, project_name) => {
        if (e) {
            return console.log(e);}
        console.log(module_stringtemplate100(
            success_message,
            {name: project_name}));};

    commander
        .command('create project_name')
        .description('make a new lambda patern project')
        .action((project_name) => {
            local_include__(mu_src_path, process.cwd(), project_name, 2000, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
            const gen_path = __dirname + '/' + project_name;
            local_include_sharedget_metadata(gen_path, cont(err, info));
                if (ERR(err, cb)) {
                    return;}
                    
            local_include_set_up_(mu_src_path, gen_path, info, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
            local_include_build_(gen_path, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
            cb(null, project_name);})}

    return _;}).catch((err) => {console.log(err);});
