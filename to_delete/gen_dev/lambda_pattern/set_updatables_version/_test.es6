// file: set_updatables_version/_test

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
    require('./_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_serialfs,
    local_include_create_,
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
            
        t.deepEqual(generated, expected);
        t.end();};

    const mu_src_path = __dirname + '/../..';

    local_include_create_(mu_src_path, __dirname, 'test_project', 2000, cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    const commit = 'df3c86442b5e9a05e471e0e90f9188bd372f7e48';
    local_include__(
        mu_src_path,
        __dirname + '/test_project',
        commit,
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    const contents = {
        gen: {
            '.gitignore': true,
            dev: {lambda_updatables: {
                example_version: true,
                'LICENCE.md': true}},
            stored: {'lambda_state_history.yaml': true}}};

    const generated = module_serialfs.obj(
        __dirname + '/test_project', contents,
        cont(err, generated));
                if (ERR(err, cb)) {
                    return;}
                    
    const expected = module_serialfs.obj(
        __dirname + '/expected_data', contents,
        cont(err, expected));
                if (ERR(err, cb)) {
                    return;}
                    
    cb(null, generated, expected);};

    return _;}).catch((err) => {console.log(err);});
