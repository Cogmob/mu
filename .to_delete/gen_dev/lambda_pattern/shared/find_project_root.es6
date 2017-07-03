// file: shared/find_project_root

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
        const import_file_existsstat = module_fsextra100.stat;
const _ = (curr_path, cb) => {
    import_file_existsstat(curr_path + '/.git', cont(err, exists))
    if (exists) {
        return cb(null, curr_path);}
    _(curr_path + '/..', cb);}

    return _;}).catch((err) => {console.log(err);});
