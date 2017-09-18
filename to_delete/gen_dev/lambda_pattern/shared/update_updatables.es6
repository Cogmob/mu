// file: shared/update_updatables

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        ERR,
        wordwrap) => {
    const _ = module.exports = (root_path, project_path, cb) => {
    console.log('updated updatables (didnt actually do anything)');
    cb();};
}).catch((err) => {console.log(err);});
