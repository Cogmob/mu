// file: overwrite_tools/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('serialfs'),
    // load local
    require('./../create/_'),
    require('./../set_up/_'),
    require('./../build/_'),
    require('./_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_serialfs,
    local_include_create_,
    local_include_set_up_,
    local_include_build_,
    local_include__,
    ERR,
        wordwrap) => {
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
            
        t.deepEqual(expected, generated);
        t.end();}
    local_include_create_(
        __dirname + '/../..',
        __dirname,
        'test_project',
        2000,
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    const metadata = {project_name: 'test_project'};
    local_include_set_up_(
        __dirname + '/../..', __dirname + '/test_project', metadata, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_build_(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include__(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_build_(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include__(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include_build_(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    local_include__(__dirname + '/test_project', cont(err));
                if (ERR(err, cb)) {
                    return;}
                    
    module_serialfs.obj(
        __dirname + '/test_project',
        false,
        true,
        cont(err, generated));
                if (ERR(err, cb)) {
                    return;}
                    
    module_serialfs.obj(
        __dirname + '/expected_data',
        false,
        true,
        cont(err, expected));
                if (ERR(err, cb)) {
                    return;}
                    
    cb(null, generated, expected);};

    return _;}).catch((err) => {console.log(err);});
