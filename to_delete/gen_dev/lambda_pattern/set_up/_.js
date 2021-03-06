'use strict';

// file: set_up/_

var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var promises = [
// load jspm
jspm.import('fs-extra@^1.0.0'),
// load local
require('./../shared/jp'), require('./../set_updatables_version/_'), require('./project'), require('./tools'),
// other
jspm.import('async-stacktrace'), jspm.import('wordwrap')];
module.exports = q.all(promises).spread(function (module_fsextra100, local_include_sharedjp, local_include_set_updatables_version_, local_include_project, local_include_tools, ERR, wordwrap) {
    var import_make_dirmkdirp = module_fsextra100.mkdirp;
    var _ = function _(mu_src_path, root_path, metadata, cb) {
        return local_include_sharedjp(import_make_dirmkdirp(root_path + '/generated_local'), local_include_set_updatables_version_(mu_src_path, root_path, 'HEAD'), local_include_project(mu_src_path, root_path, metadata), local_include_tools(mu_src_path, root_path, metadata));
    };

    return _;
}).catch(function (err) {
    console.log(err);
});
/* Generated by Continuation.js v0.1.7 */