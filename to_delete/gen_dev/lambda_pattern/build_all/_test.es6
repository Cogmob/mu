// file: build_all/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    jspm.import('serialfs'),
    // load local
    require('./../create/_'),
    require('./../set_up/_'),
    require('./_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    module_serialfs,
    local_include_create_,
    local_include_set_up_,
    local_include__,
    ERR,
        wordwrap) => {
        const import_make_dirmkdirp = module_fsextra100.mkdirp;
    const import_copy_pathcopy = module_fsextra100.copy;
const _ = () => {
    const cb = (err, generated, expected) => {
            if (err) {
                console.log(wordwrap(20, 81)(
                    err.stack.replace(/\\/g, '\\ ').replace(/^/gm, '.'))
                .split('\n').forEach((stack_line) => {
                    console.log(stack_line
                        .replace(/\\ /g, '\\')
                        .replace(/ at/g, '\nat')
                        .replace(/Error:/g, '\nError:'));}));}
            
        t.deepEqual(generated, expected);
        t.end();};

    local_include_create_(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    import_make_dirmkdirp(__dirname + '/test_project/submodules');
    import_copy_pathcopy(__dirname + '/test_module_data',
            __dirname + '/test_project/submodules/test_module',
            cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    const metadata = {project_name: 'test_project'};
    local_include_set_up_(
        __dirname + '/../..', __dirname + '/test_project', metadata, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include__(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
 
 
    const contents = {
        gen: {
            '.gitignore': true,
            dev: {
                lambda_updatables: {
                    example_version: true,
                    'LICENCE.md': true},
                src: {test_project: {
                    'test_project_test.es6': false,
                    'test_project_test.js': false,
                    'test_project.es6': false,
                    'test_project.js': false,
                    'metadata.yaml': false }}},
            stored: {'lambda_state_history.yaml': true}}};

    const generated = module_serialfs.obj(
        __dirname + '/test_project', contents, true,
        cont(err, generated));
                if (ERR(err, cb)) {
                    return;}
                    
    const expected = module_serialfs.obj(
        __dirname + '/expected_data', contents, true,
        cont(err, expected));
                if (ERR(err, cb)) {
                    return;}
                    
    cb(null, generated, expected);};

    return _;}).catch((err) => {console.log(err);});
