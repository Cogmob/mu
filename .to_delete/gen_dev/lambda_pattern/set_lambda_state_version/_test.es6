// file: set_lambda_state_version/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('serialfs'),
    // load local
    require('./_'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_serialfs,
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

    local_include__(
        __dirname + '/../..',
        __dirname + '/before',
        12345,
        cont(err));
                if (ERR(err, cb)) {
                    return;}
                    

    module_serialfs.obj(__dirname + '/before', {}, cont(err, generated));
                if (ERR(err, cb)) {
                    return;}
                    
    module_serialfs.obj(__dirname + '/expected_data', {}, cont(err, expected));
                if (ERR(err, cb)) {
                    return;}
                    
    cb(null, generated, expected);};

    return _;}).catch((err) => {console.log(err);});
