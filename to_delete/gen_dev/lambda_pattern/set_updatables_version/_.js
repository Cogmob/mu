var jspm, q, promises;
'use strict';
jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
promises = [
  jspm.import('fs-extra@^1.0.0'),
  jspm.import('git-archive@^0.1.4'),
  jspm.import('tar-fs@^1.15.0'),
  jspm.import('remove_path'),
  require('./../shared/find_project_root'),
  jspm.import('async-stacktrace'),
  jspm.import('wordwrap')
];
module.exports = q.all(promises).spread(function (module_fsextra100, module_gitarchive014, module_tarfs1150, module_remove_path, local_include_sharedfind_project_root, ERR, wordwrap) {
  var import_make_dirmkdirp, import_move_pathmove, _;
  import_make_dirmkdirp = module_fsextra100.mkdirp;
  import_move_pathmove = module_fsextra100.move;
  _ = function _(mu_src_path, root_path, version, cb) {
    var move, find_project_root, move_updatables, cleanup;
    move = module_fsextra100.move;
    find_project_root = local_include_sharedfind_project_root;
    (function () {
      var err, tool_root;
      import_make_dirmkdirp(root_path + '/generated_local', function (arguments, _$param0) {
        err = _$param0;
        if (ERR(err, cb)) {
          return;
        }
        find_project_root(mu_src_path + '/mu_sub_repo', function (arguments, _$param1, _$param2) {
          err = _$param1;
          tool_root = _$param2;
          if (ERR(err, cb)) {
            return;
          }
          module_gitarchive014({
            repoPath: tool_root + '/.git',
            commit: version,
            outputPath: root_path + '/generated_local/updatables.tar'
          }, function (arguments, _$param3) {
            err = _$param3;
            if (ERR(err, cb)) {
              return;
            }
            move_updatables();
          }.bind(this, arguments));
        }.bind(this, arguments));
      }.bind(this, arguments));
    }());
    move_updatables = function move_updatables() {
      var err;
      import_make_dirmkdirp(root_path + '/generated_local/updatables', function (arguments, _$param4) {
        err = _$param4;
        if (ERR(err, cb)) {
          return;
        }
        module_fsextra100.createReadStream(root_path + '/generated_local/updatables.tar').pipe(module_tarfs1150.extract(root_path + '/generated_local/updatables')).on('finish', cleanup).on('error', function (er) {
          return ERR(er, cb);
        });
      }.bind(this, arguments));
    };
    cleanup = function cleanup() {
      var err;
      module_remove_path(root_path + '/generated_local/lambda_updatables', function (arguments, _$param5) {
        err = _$param5;
        if (ERR(err, cb)) {
          return;
        }
        import_move_pathmove(root_path + '/generated_local/updatables/gen/release/updatables', root_path + '/generated_local/lambda_updatables', function (arguments, _$param6) {
          err = _$param6;
          if (ERR(err, cb)) {
            return;
          }
          module_remove_path(root_path + '/generated_local/updatables.tar', function (arguments, _$param7) {
            err = _$param7;
            if (ERR(err, cb)) {
              return;
            }
            module_remove_path(root_path + '/generated_local/updatables', function (arguments, _$param8) {
              err = _$param8;
              if (ERR(err, cb)) {
                return;
              }
              cb();
            }.bind(this, arguments));
          }.bind(this, arguments));
        }.bind(this, arguments));
      }.bind(this, arguments));
    };
  };
  return _;
}).catch(function (err) {
  console.log(err);
});
/* Generated by Continuation.js v0.1.7 */