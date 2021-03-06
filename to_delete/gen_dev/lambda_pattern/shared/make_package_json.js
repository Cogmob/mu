var jspm, q, promises;
'use strict';
jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
promises = [
  jspm.import('ramda'),
  jspm.import('fs-extra@^1.0.0'),
  jspm.import('js-yaml@^3.7.0'),
  jspm.import('object-merge-override@^0.1.0'),
  jspm.import('string-template@^1.0.0'),
  jspm.import('async-stacktrace'),
  jspm.import('wordwrap')
];
module.exports = q.all(promises).spread(function (module_ramda, module_fsextra100, module_jsyaml370, module_objectmergeoverride010, module_stringtemplate100, ERR, wordwrap) {
  var import_read_filereadFile, import_write_filewriteFile, _;
  import_read_filereadFile = module_fsextra100.readFile;
  import_write_filewriteFile = module_fsextra100.writeFile;
  _ = function _(mu_src_path, metadata, gen_path, deps, dev_deps, cb) {
    var map_to_str, err, def_vals_yaml, def_vals, template, replace, s;
    map_to_str = function map_to_str(i) {
      var ret;
      ret = module_ramda.map(function (pair) {
        return '"' + pair[0] + '": "' + pair[1] + '"';
      }, module_ramda.toPairs(i));
      return ret.join(',\n    ');
    };
    import_read_filereadFile(mu_src_path + '/lambda_pattern/shared/default_package_values.yaml', 'utf8', function (arguments, _$param0, _$param1) {
      err = _$param0;
      def_vals_yaml = _$param1;
      if (ERR(err, cb)) {
        return;
      }
      def_vals = module_jsyaml370.safeLoad(def_vals_yaml);
      import_read_filereadFile(mu_src_path + '/lambda_pattern/shared/package_template.json', 'utf8', function (arguments, _$param2, _$param3) {
        err = _$param2;
        template = _$param3;
        if (ERR(err, cb)) {
          return;
        }
        replace = module_objectmergeoverride010([
          metadata,
          def_vals
        ]);
        replace.dependencies = map_to_str(deps);
        replace.dev_dependencies = map_to_str(dev_deps);
        s = module_stringtemplate100(template, replace);
        import_write_filewriteFile(gen_path + '/package.json', s, cb);
      }.bind(this, arguments));
    }.bind(this, arguments));
  };
  return _;
}).catch(function (err) {
  console.log(err);
});
/* Generated by Continuation.js v0.1.7 */