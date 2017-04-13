#!/usr/bin/env node

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {const jspm = eval('require')(
	    process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	const q = eval('require')(
	    process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	const promises = [
	    // load jspm
	    jspm.import('commander'),
	    // load local
	    __webpack_require__(2),
	    __webpack_require__(16),
	    __webpack_require__(29),
	    // other
	    jspm.import('async-stacktrace'),
	    jspm.import('wordwrap')];
	module.exports = q.all(promises).spread((
	    module_commander,
	    local_include_create_commander,
	    local_include__test,
	    local_include__test_commander,
	    ERR,
	    wordwrap) => {
	const _ = {
	    _: (updatables, config) => {
	        local_include_create_commander(module_commander, __dirname);
	        module_commander.parse(process.argv);},
	    test: local_include__test};

	if (__webpack_require__.c[0] === module) {
	    local_include__test_commander(module_commander);
	    module_commander.parse(process.argv);}

	    return _;}).catch((err) => {console.log(err);});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('string-template@^1.0.0'),
	  __webpack_require__(3),
	  __webpack_require__(4),
	  __webpack_require__(5),
	  __webpack_require__(12),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_stringtemplate100, local_include__, local_include_sharedget_metadata, local_include_set_up_, local_include_build_, ERR, wordwrap) {
	  var _;
	  _ = function _(commander, mu_src_path) {
	    var success_message, cb;
	    success_message = 'created project \'{name}\' in your current directory';
	    cb = function cb(e, project_name) {
	      if (e) {
	        return console.log(e);
	      }
	      console.log(module_stringtemplate100(success_message, { name: project_name }));
	    };
	    commander.command('create project_name').description('make a new lambda patern project').action(function (project_name) {
	      var err, gen_path, info;
	      local_include__(mu_src_path, process.cwd(), project_name, 2000, function (arguments, _$param0) {
	        err = _$param0;
	        if (ERR(err, cb)) {
	          return;
	        }
	        gen_path = __dirname + '/' + project_name;
	        local_include_sharedget_metadata(gen_path, function (arguments, _$param1, _$param2) {
	          err = _$param1;
	          info = _$param2;
	          if (ERR(err, cb)) {
	            return;
	          }
	          local_include_set_up_(mu_src_path, gen_path, info, function (arguments, _$param3) {
	            err = _$param3;
	            if (ERR(err, cb)) {
	              return;
	            }
	            local_include_build_(gen_path, function (arguments, _$param4) {
	              err = _$param4;
	              if (ERR(err, cb)) {
	                return;
	              }
	              cb(null, project_name);
	            }.bind(this, arguments));
	          }.bind(this, arguments));
	        }.bind(this, arguments));
	      }.bind(this, arguments));
	    });
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 3 */
/***/ function(module, exports) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, ERR, wordwrap) {
	  var import_copy_pathcopy, import_read_filereadFile, import_write_filewriteFile, _;
	  import_copy_pathcopy = module_fsextra100.copy;
	  import_read_filereadFile = module_fsextra100.readFile;
	  import_write_filewriteFile = module_fsextra100.writeFile;
	  _ = function _(mu_src_path, root_path, project_name, year, cb) {
	    var skel_path, gen_path, err, readme, index, test_file, meta;
	    skel_path = mu_src_path + '/skeleton_data';
	    gen_path = root_path + '/' + project_name;
	    import_copy_pathcopy(skel_path, gen_path, function (arguments, _$param0) {
	      err = _$param0;
	      if (ERR(err, cb)) {
	        return;
	      }
	      import_read_filereadFile(gen_path + '/readme.md', 'utf8', function (arguments, _$param1, _$param2) {
	        err = _$param1;
	        readme = _$param2;
	        if (ERR(err, cb)) {
	          return;
	        }
	        readme = readme.replace(/\[\[project_name\]\]/g, project_name);
	        import_write_filewriteFile(gen_path + '/readme.md', readme, function (arguments, _$param3) {
	          err = _$param3;
	          if (ERR(err, cb)) {
	            return;
	          }
	          import_read_filereadFile(gen_path + '/_.es6', 'utf8', function (arguments, _$param4, _$param5) {
	            err = _$param4;
	            index = _$param5;
	            if (ERR(err, cb)) {
	              return;
	            }
	            index = index.replace(/\[\[project_name\]\]/g, project_name);
	            import_write_filewriteFile(gen_path + '/_.es6', index, function (arguments, _$param6) {
	              err = _$param6;
	              if (ERR(err, cb)) {
	                return;
	              }
	              import_read_filereadFile(gen_path + '/__test.es6', 'utf8', function (arguments, _$param7, _$param8) {
	                err = _$param7;
	                test_file = _$param8;
	                if (ERR(err, cb)) {
	                  return;
	                }
	                test_file = test_file.replace(/\[\[project_name\]\]/g, project_name);
	                import_write_filewriteFile(gen_path + '/__test.es6', test_file, function (arguments, _$param9) {
	                  err = _$param9;
	                  if (ERR(err, cb)) {
	                    return;
	                  }
	                  import_read_filereadFile(gen_path + '/meta/data.yaml', 'utf8', function (arguments, _$param10, _$param11) {
	                    err = _$param10;
	                    meta = _$param11;
	                    if (ERR(err, cb)) {
	                      return;
	                    }
	                    meta = meta.replace(/\[\[project_name\]\]/g, project_name);
	                    import_write_filewriteFile(gen_path + '/meta/data.yaml', meta, function (arguments, _$param12) {
	                      err = _$param12;
	                      if (ERR(err, cb)) {
	                        return;
	                      }
	                      cb(null);
	                    }.bind(this, arguments));
	                  }.bind(this, arguments));
	                }.bind(this, arguments));
	              }.bind(this, arguments));
	            }.bind(this, arguments));
	          }.bind(this, arguments));
	        }.bind(this, arguments));
	      }.bind(this, arguments));
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 4 */
/***/ function(module, exports) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  jspm.import('js-yaml@^3.7.0'),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, module_jsyaml370, ERR, wordwrap) {
	  var import_read_filereadFile, _;
	  import_read_filereadFile = module_fsextra100.readFile;
	  _ = function _(root_path, cb) {
	    var err, metadata;
	    import_read_filereadFile(root_path + '/meta/data.yaml', 'utf8', function (arguments, _$param0, _$param1) {
	      err = _$param0;
	      metadata = _$param1;
	      if (ERR(err, cb)) {
	        return;
	      }
	      cb(null, module_jsyaml370.safeLoad(metadata), root_path);
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  __webpack_require__(6),
	  __webpack_require__(8),
	  __webpack_require__(10),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, local_include_set_updatables_version_, local_include_project, local_include_tools, ERR, wordwrap) {
	  var import_make_dirmkdirp, _;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  _ = function _(mu_src_path, root_path, metadata, cb) {
	    var err;
	    import_make_dirmkdirp(root_path + '/generated_local', function (arguments, _$param0) {
	      err = _$param0;
	      if (ERR(err, cb)) {
	        return;
	      }
	      local_include_set_updatables_version_(mu_src_path, root_path, 'HEAD', function (arguments, _$param1) {
	        err = _$param1;
	        if (ERR(err, cb)) {
	          return;
	        }
	        local_include_project(mu_src_path, root_path, metadata, function (arguments, _$param2) {
	          err = _$param2;
	          if (ERR(err, cb)) {
	            return;
	          }
	          local_include_tools(mu_src_path, root_path, metadata, function (arguments, _$param3) {
	            err = _$param3;
	            if (ERR(err, cb)) {
	              return;
	            }
	            cb();
	          }.bind(this, arguments));
	        }.bind(this, arguments));
	      }.bind(this, arguments));
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  jspm.import('git-archive@^0.1.4'),
	  jspm.import('tar-fs@^1.15.0'),
	  __webpack_require__(7),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, module_gitarchive014, module_tarfs1150, local_include_sharedfind_project_root, ERR, wordwrap) {
	  var import_make_dirmkdirp, import_remove_pathremove, import_move_pathmove, move, find_project_root, _;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  import_remove_pathremove = module_fsextra100.remove;
	  import_move_pathmove = module_fsextra100.move;
	  move = module_fsextra100.move;
	  find_project_root = local_include_sharedfind_project_root;
	  _ = function _(mu_src_path, root_path, version, cb) {
	    var move_updatables, cleanup;
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
	      import_remove_pathremove(root_path + '/generated_local/lambda_updatables', function (arguments, _$param5) {
	        err = _$param5;
	        if (ERR(err, cb)) {
	          return;
	        }
	        import_move_pathmove(root_path + '/generated_local/updatables/gen/release/updatables', root_path + '/generated_local/lambda_updatables', function (arguments, _$param6) {
	          err = _$param6;
	          if (ERR(err, cb)) {
	            return;
	          }
	          import_remove_pathremove(root_path + '/generated_local/updatables.tar', function (arguments, _$param7) {
	            err = _$param7;
	            if (ERR(err, cb)) {
	              return;
	            }
	            import_remove_pathremove(root_path + '/generated_local/updatables', function (arguments, _$param8) {
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

/***/ },
/* 7 */
/***/ function(module, exports) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, ERR, wordwrap) {
	  var import_file_existsstat, _;
	  import_file_existsstat = module_fsextra100.stat;
	  _ = function _(curr_path, cb) {
	    var err, exists;
	    import_file_existsstat(curr_path + '/.git', function (arguments, _$param0, _$param1) {
	      err = _$param0;
	      exists = _$param1;
	      if (exists) {
	        return cb(null, curr_path);
	      }
	      _(curr_path + '/..', cb);
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  __webpack_require__(9),
	  __webpack_require__(6),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, local_include_sharedcopy_if_exists, local_include_set_updatables_version_, ERR, wordwrap) {
	  var import_remove_pathremove, import_make_dirmkdirp, import_copy_pathcopy, copy_if_exists, _;
	  import_remove_pathremove = module_fsextra100.remove;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  import_copy_pathcopy = module_fsextra100.copy;
	  copy_if_exists = local_include_sharedcopy_if_exists;
	  _ = function _(mu_src_path, root_path, metadata, cb) {
	    var gen_path, err;
	    gen_path = root_path + '/generated_local/project';
	    import_remove_pathremove(gen_path, function (arguments, _$param0) {
	      err = _$param0;
	      if (ERR(err, cb)) {
	        return;
	      }
	      import_make_dirmkdirp(gen_path, function (arguments, _$param1) {
	        err = _$param1;
	        if (ERR(err, cb)) {
	          return;
	        }
	        copy_if_exists(root_path + '/submodules', gen_path, function (arguments, _$param2) {
	          err = _$param2;
	          if (ERR(err, cb)) {
	            return;
	          }
	          import_copy_pathcopy(root_path + '/_.es6', gen_path + '/_.es6', function (arguments, _$param3) {
	            err = _$param3;
	            if (ERR(err, cb)) {
	              return;
	            }
	            import_copy_pathcopy(root_path + '/__test.es6', gen_path + '/__test.es6', function (arguments, _$param4) {
	              err = _$param4;
	              if (ERR(err, cb)) {
	                return;
	              }
	              local_include_set_updatables_version_(mu_src_path, root_path, 'HEAD', function (arguments, _$param5) {
	                err = _$param5;
	                if (ERR(err, cb)) {
	                  return;
	                }
	                cb();
	              }.bind(this, arguments));
	            }.bind(this, arguments));
	          }.bind(this, arguments));
	        }.bind(this, arguments));
	      }.bind(this, arguments));
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('fs-extra@^1.0.0'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_fsextra100, ERR, wordwrap) {
	    var _ = function _(from, to, cb) {
	        var handle_response = function handle_response() {
	            cb();
	        };

	        module_fsextra100.copy(from, to, handle_response);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  __webpack_require__(9),
	  __webpack_require__(11),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, local_include_sharedcopy_if_exists, local_include_sharedmake_package_json, ERR, wordwrap) {
	  var import_remove_pathremove, import_make_dirmkdirp, copy_if_exists, make_package_json, _;
	  import_remove_pathremove = module_fsextra100.remove;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  copy_if_exists = local_include_sharedcopy_if_exists;
	  make_package_json = local_include_sharedmake_package_json;
	  _ = function _(mu_src_path, root, metadata, cb) {
	    var gen_path, err;
	    gen_path = root + '/generated_local/tools';
	    import_remove_pathremove(gen_path, function (arguments, _$param0) {
	      err = _$param0;
	      if (ERR(err, cb)) {
	        return;
	      }
	      import_make_dirmkdirp(gen_path, function (arguments, _$param1) {
	        err = _$param1;
	        if (ERR(err, cb)) {
	          return;
	        }
	        copy_if_exists(root + '/tools', gen_path, function (arguments, _$param2) {
	          err = _$param2;
	          if (ERR(err, cb)) {
	            return;
	          }
	          import_make_dirmkdirp(root + '/generated/tools', function (arguments, _$param3) {
	            err = _$param3;
	            if (ERR(err, cb)) {
	              return;
	            }
	            cb();
	          }.bind(this, arguments));
	        }.bind(this, arguments));
	      }.bind(this, arguments));
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 11 */
/***/ function(module, exports) {

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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load local
	__webpack_require__(9), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (local_include_sharedcopy_if_exists, local_include_sharedmove_if_exists, local_include_sharedremove_if_exists, local_include_sharedconvert_es6, ERR, wordwrap) {
	    var copy_if_exists = local_include_sharedcopy_if_exists;
	    var move_if_exists = local_include_sharedmove_if_exists;
	    var remove_if_exists = local_include_sharedremove_if_exists;
	    var convert_es6 = local_include_sharedconvert_es6;

	    var _ = function _(root, cb) {
	        console.log(root);

	        cb(null);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('fs-extra@^1.0.0'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_fsextra100, ERR, wordwrap) {
	    var import_move_pathmove = module_fsextra100.move;
	    var _ = function _(from, to, cb) {
	        var handle_response = function handle_response() {
	            cb();
	        };

	        import_move_pathmove(from, to, handle_response);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('fs-extra@^1.0.0'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_fsextra100, ERR, wordwrap) {
	    var import_remove_pathremove = module_fsextra100.remove;
	    var _ = function _(path, cb) {
	        var handle_response = function handle_response() {
	            cb();
	        };

	        import_remove_pathremove(path, handle_response);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {
	    var _ = function _(root_path, cb) {};

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load local
	__webpack_require__(17),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (local_include_conveyor_to_display_test, ERR, wordwrap) {
	    var _ = function _() {
	        var cb = function cb(err) {
	            if (err) {
	                console.log(wordwrap(20, 81)(err.stack.replace(/\\/g, '\\ ').replace(/^/gm, '.')).split('\n').forEach(function (stack_line) {
	                    console.log(stack_line.replace(/\\ /g, '\\').replace(/ at/g, '\nat').replace(/Error:/g, '\nError:'));
	                }));
	            }
	            console.log('error');
	        };

	        local_include_conveyor_to_display_test().then(function () {
	            console.log('all tests finished');
	        });
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'), jspm.import('smf-deep-diff'), jspm.import('js-yaml@3.8.1'),
	// load local
	__webpack_require__(18),
	// load regex
	__webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, module_smfdeepdiff, module_jsyaml381, local_include_sharedzip, regex_05__1_pre_ast, regex_05__2_ast, regex_05__3_ast_transformed, regex_05__4_generated, regex_05__5_display, regex_after_data05yaml__after_data1_pre_astyaml, regex_after_data05yaml__after_data2_astyaml, regex_after_data05yaml__after_data3_ast_transformedyaml, regex_after_data05yaml__after_data4_generatedyaml, regex_after_data05yaml__after_data5_displayyaml, ERR, wordwrap) {
	    var regex_05 = {
	        by_file: {},
	        by_folder: {} };
	    regex_05.by_file['1_pre_ast'] = regex_05__1_pre_ast;
	    regex_05.by_folder['undefined'] = regex_05__1_pre_ast;
	    regex_05.by_file['2_ast'] = regex_05__2_ast;
	    regex_05.by_folder['undefined'] = regex_05__2_ast;
	    regex_05.by_file['3_ast_transformed'] = regex_05__3_ast_transformed;
	    regex_05.by_folder['undefined'] = regex_05__3_ast_transformed;
	    regex_05.by_file['4_generated'] = regex_05__4_generated;
	    regex_05.by_folder['undefined'] = regex_05__4_generated;
	    regex_05.by_file['5_display'] = regex_05__5_display;
	    regex_05.by_folder['undefined'] = regex_05__5_display;
	    var regex_after_data05yaml = {
	        by_file: {},
	        by_folder: {} };
	    regex_after_data05yaml.by_file['1_pre_ast'] = regex_after_data05yaml__after_data1_pre_astyaml;
	    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data1_pre_astyaml;
	    regex_after_data05yaml.by_file['2_ast'] = regex_after_data05yaml__after_data2_astyaml;
	    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data2_astyaml;
	    regex_after_data05yaml.by_file['3_ast_transformed'] = regex_after_data05yaml__after_data3_ast_transformedyaml;
	    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data3_ast_transformedyaml;
	    regex_after_data05yaml.by_file['4_generated'] = regex_after_data05yaml__after_data4_generatedyaml;
	    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data4_generatedyaml;
	    regex_after_data05yaml.by_file['5_display'] = regex_after_data05yaml__after_data5_displayyaml;
	    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data5_displayyaml;
	    var import_diffdiff = module_smfdeepdiff.diff;
	    var import_yaml_writedump = module_jsyaml381.dump;
	    var _ = function _() {
	        var steps = local_include_sharedzip('func', regex_05.by_file, 'expected', regex_after_data05yaml.by_file);

	        return module_lodash.reduce(steps, function (promise, step) {
	            return promise.then(step.func).then(function (actual) {
	                var d = import_diffdiff(step.expected, actual);
	                if (d) {
	                    console.log('actual does not match expectation:');
	                    console.log(import_yaml_writedump(JSON.parse(JSON.stringify(d))));
	                    return Promise.reject();
	                }
	                return Promise.resolve(actual);
	            });
	        }, Promise.resolve(__dirname + '/conveyor_to_display/before_data'));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {
	    var _ = function _(key1, arr1, key2, arr2) {
	        var ret = [];
	        for (var i = 0; i < arr1.length; i++) {
	            var item = {};
	            item[key1] = arr1[i];
	            item[key2] = arr2[i];
	            ret.push(item);
	        };
	        return ret;
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('glob-promise'), jspm.import('read-files-promise'),
	// load local
	__webpack_require__(18),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_globpromise, module_readfilespromise, local_include_sharedzip, ERR, wordwrap) {
	    var _ = function _(path) {
	        path = path.replace(/\\/g, '/');
	        var paths;
	        return module_globpromise(path + '/**/*.es6').then(function (filenames) {
	            paths = filenames.map(function (filename) {
	                return filename.replace(path + '/', '');
	            });
	            return module_readfilespromise(filenames, 'utf8');
	        }).then(function (files) {
	            files = local_include_sharedzip('path', paths, 'contents', files);
	            return Promise.resolve(files);
	        });
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('acorn'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_acorn, ERR, wordwrap) {
	    var _ = function _(files) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var file = _step.value;

	                try {
	                    file['contents'] = module_acorn.parse(file['contents'], {
	                        range: true,
	                        loc: true,
	                        ecmaVersion: 6,
	                        sourcetype: 'module' });
	                } catch (err) {
	                    console.log('error:');
	                    console.log(err);
	                    console.log('path:');
	                    console.log(file['path']);
	                    console.log('contents:');
	                    console.log(file['contents']);
	                    return Promise.reject(err);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return Promise.resolve(files);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {
	    var _ = function _(data) {
	        return Promise.resolve(data);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('astring'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_astring, ERR, wordwrap) {
	    var _ = function _(files) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var file = _step.value;

	                try {
	                    file['contents'] = module_astring.generate(file['contents'], {
	                        indent: '    ', lineEnd: '\n' });
	                } catch (err) {
	                    console.log('error:');
	                    console.log(err);
	                    console.log('path:');
	                    console.log(file['path']);
	                    console.log('contents:');
	                    console.log(file['contents']);
	                    return Promise.reject(err);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return Promise.resolve(files);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {
	    var _ = function _(data) {
	        return Promise.resolve(data);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": "const a = (a, b) => {\n    console.log(a);\n};\n"
		},
		{
			"path": "b.es6",
			"contents": ""
		},
		{
			"path": "c.es6",
			"contents": ""
		},
		{
			"path": "sub_folder/d.es6",
			"contents": ""
		},
		{
			"path": "sub_folder/e.es6",
			"contents": ""
		}
	];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 45,
				"body": [
					{
						"type": "VariableDeclaration",
						"start": 0,
						"end": 44,
						"declarations": [
							{
								"type": "VariableDeclarator",
								"start": 6,
								"end": 43,
								"id": {
									"type": "Identifier",
									"start": 6,
									"end": 7,
									"name": "a"
								},
								"init": {
									"type": "ArrowFunctionExpression",
									"start": 10,
									"end": 43,
									"id": null,
									"generator": false,
									"expression": false,
									"params": [
										{
											"type": "Identifier",
											"start": 11,
											"end": 12,
											"name": "a"
										},
										{
											"type": "Identifier",
											"start": 14,
											"end": 15,
											"name": "b"
										}
									],
									"body": {
										"type": "BlockStatement",
										"start": 20,
										"end": 43,
										"body": [
											{
												"type": "ExpressionStatement",
												"start": 26,
												"end": 41,
												"expression": {
													"type": "CallExpression",
													"start": 26,
													"end": 40,
													"callee": {
														"type": "MemberExpression",
														"start": 26,
														"end": 37,
														"object": {
															"type": "Identifier",
															"start": 26,
															"end": 33,
															"name": "console"
														},
														"property": {
															"type": "Identifier",
															"start": 34,
															"end": 37,
															"name": "log"
														},
														"computed": false
													},
													"arguments": [
														{
															"type": "Identifier",
															"start": 38,
															"end": 39,
															"name": "a"
														}
													]
												}
											}
										]
									}
								}
							}
						],
						"kind": "const"
					}
				],
				"sourceType": "script"
			}
		},
		{
			"path": "b.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		},
		{
			"path": "c.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		},
		{
			"path": "sub_folder/d.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		},
		{
			"path": "sub_folder/e.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		}
	];

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 45,
				"body": [
					{
						"type": "VariableDeclaration",
						"start": 0,
						"end": 44,
						"declarations": [
							{
								"type": "VariableDeclarator",
								"start": 6,
								"end": 43,
								"id": {
									"type": "Identifier",
									"start": 6,
									"end": 7,
									"name": "a"
								},
								"init": {
									"type": "ArrowFunctionExpression",
									"start": 10,
									"end": 43,
									"id": null,
									"generator": false,
									"expression": false,
									"params": [
										{
											"type": "Identifier",
											"start": 11,
											"end": 12,
											"name": "a"
										},
										{
											"type": "Identifier",
											"start": 14,
											"end": 15,
											"name": "b"
										}
									],
									"body": {
										"type": "BlockStatement",
										"start": 20,
										"end": 43,
										"body": [
											{
												"type": "ExpressionStatement",
												"start": 26,
												"end": 41,
												"expression": {
													"type": "CallExpression",
													"start": 26,
													"end": 40,
													"callee": {
														"type": "MemberExpression",
														"start": 26,
														"end": 37,
														"object": {
															"type": "Identifier",
															"start": 26,
															"end": 33,
															"name": "console"
														},
														"property": {
															"type": "Identifier",
															"start": 34,
															"end": 37,
															"name": "log"
														},
														"computed": false
													},
													"arguments": [
														{
															"type": "Identifier",
															"start": 38,
															"end": 39,
															"name": "a"
														}
													]
												}
											}
										]
									}
								}
							}
						],
						"kind": "const"
					}
				],
				"sourceType": "script"
			}
		},
		{
			"path": "b.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		},
		{
			"path": "c.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		},
		{
			"path": "sub_folder/d.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		},
		{
			"path": "sub_folder/e.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 0,
				"body": [],
				"sourceType": "script"
			}
		}
	];

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": "const a = (a, b) => {\n    console.log(a);\n};\n"
		},
		{
			"path": "b.es6",
			"contents": ""
		},
		{
			"path": "c.es6",
			"contents": ""
		},
		{
			"path": "sub_folder/d.es6",
			"contents": ""
		},
		{
			"path": "sub_folder/e.es6",
			"contents": ""
		}
	];

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": "const a = (a, b) => {\n    console.log(a);\n};\n"
		},
		{
			"path": "b.es6",
			"contents": ""
		},
		{
			"path": "c.es6",
			"contents": ""
		},
		{
			"path": "sub_folder/d.es6",
			"contents": ""
		},
		{
			"path": "sub_folder/e.es6",
			"contents": ""
		}
	];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  __webpack_require__(16),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (local_include__test, ERR, wordwrap) {
	  var _;
	  _ = function _(commander) {
	    var success_message;
	    success_message = 'tests complete';
	    commander.command('test').description('run all tests').action(function () {
	      var err;
	      local_include__test(function (arguments, _$param0) {
	        err = _$param0;
	        if (ERR(err, cb)) {
	          return;
	        }
	        console.log(success_message);
	      }.bind(this, arguments));
	    });
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }
/******/ ]);
if (!module.parent) {
    module.exports.then(function(f) {f(function (er) {
        if (er) {
           console.log(er.toString());
        }
    });});
}