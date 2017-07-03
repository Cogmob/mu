// file: build_all/modify_main_file

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    ERR,
        wordwrap) => {
        const import_read_filereadFile = module_fsextra100.readFile;
    const import_write_filewriteFile = module_fsextra100.writeFile;
const _ = (root_path, cb) => {
    import_read_filereadFile(root_path + '/_.es6', cont(err, main_file));
                if (ERR(err, cb)) {
                    return;}
                    
    main_file = main_file + `
        if (!module.parent) {
            lambda_pattern(function (er) {
                if (er) {
                   console.log(er.toString());
                }
            });
        }`
    import_write_filewriteFile(root_path + '/_.es6', main_file, cb);};

    return _;}).catch((err) => {console.log(err);});
