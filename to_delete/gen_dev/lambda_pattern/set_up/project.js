'use strict';

// file: set_up/project

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('fs-extra@^1.0.0'),
// load local
require('./../shared/jp'), require('./../shared/copy_if_exists'), require('./../set_updatables_version/_'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_fsextra100, local_include_sharedjp, local_include_sharedcopy_if_exists, local_include_set_updatables_version_, ERR, wordwrap) {
    var import_delete_pathremove = module_fsextra100.remove;
    var import_make_dirmkdirp = module_fsextra100.mkdirp;
    var import_copy_pathcopy = module_fsextra100.copy;
    var _ = function _(mu_src_path, root_path, metadata, cb) {
        var gen_path = root_path + '/generated_local/project';
        return local_include_sharedjp(import_delete_pathremove(gen_path), import_make_dirmkdirp(gen_path), local_include_sharedcopy_if_exists(root_path + '/submodules', gen_path), import_copy_pathcopy(root_path + '/_.es6', gen_path + '/_.es6'), import_copy_pathcopy(root_path + '/__test.es6', gen_path + '/__test.es6'), local_include_set_updatables_version_(mu_src_path, root_path, 'HEAD'));
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */