// file: build/modify_es6

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('vinyl-fs'),
    jspm.import('map-stream'),
    // load local
    require('./header.txt'),
    require('./error_handler.txt'),
    require('./cb_define.txt'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_vinylfs,
    module_mapstream,
    local_include_headertxt,
    local_include_error_handlertxt,
    local_include_cb_definetxt,
    ERR,
        wordwrap) => {
    const _ = (root_path, cb) => {
    module_vinylfs.src([
                '/**' + '/*.es6',
                '!*' + '*/expected/**',
                '!**' + '/node_modules/**',
                '!**' + '/*_data/**' + '/*'],
            {root: root_path})
        .pipe(module_mapstream((file, cb2) => {
            var contents = file.contents.toString();
            contents = local_include_headertxt + contents
                .replace(/cont\(.*err.*\).*;/g, local_include_error_handlertxt)
                .replace(/const cb = \(err.*\) \=> \{/g, local_include_cb_definetxt);
 
            file.contents = new Buffer(contents);
            cb2(null, file);}))
        .pipe(module_vinylfs.dest(root_path))
        .on('finish', () => cb());};

    return _;}).catch((err) => {console.log(err);});
