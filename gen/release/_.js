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
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// file: lambda_pattern/_

	const jspm = eval('require')(
	        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	    const q = eval('require')(
	        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	    const promises = [
	        // load jspm
	    jspm.import('commander'),
	    // load local
	    __webpack_require__(2),
	    __webpack_require__(13),
	    __webpack_require__(50),
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var import_make_dirmkdirp, import_remove_pathremove, import_move_pathmove, _;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  import_remove_pathremove = module_fsextra100.remove;
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var import_remove_pathremove, import_make_dirmkdirp, import_copy_pathcopy, _;
	  import_remove_pathremove = module_fsextra100.remove;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  import_copy_pathcopy = module_fsextra100.copy;
	  _ = function _(mu_src_path, root_path, metadata, cb) {
	    var copy_if_exists, gen_path, err;
	    copy_if_exists = local_include_sharedcopy_if_exists;
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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	// file: shared/copy_if_exists

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var import_remove_pathremove, import_make_dirmkdirp, _;
	  import_remove_pathremove = module_fsextra100.remove;
	  import_make_dirmkdirp = module_fsextra100.mkdirp;
	  _ = function _(mu_src_path, root, metadata, cb) {
	    var copy_if_exists, make_package_json, gen_path, err;
	    copy_if_exists = local_include_sharedcopy_if_exists;
	    make_package_json = local_include_sharedmake_package_json;
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	// file: build/_

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {
	    var _ = function _(root, cb) {
	        console.log(root);

	        cb(null);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: lambda_pattern/_test

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'), jspm.import('marked'), jspm.import('marked-terminal'),
	// load local
	__webpack_require__(14), __webpack_require__(15), __webpack_require__(31), __webpack_require__(36),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, module_marked, module_markedterminal, local_include_sharedconcat_promises, local_include_diff_test, local_include_commander_add_test, local_include_conveyor_to_display_test, ERR, wordwrap) {
	    var _ = function _() {
	        module_bluebird.config({ warnings: false, longStackTraces: false });
	        module_marked.setOptions({ renderer: new module_markedterminal() });

	        local_include_sharedconcat_promises('test results:', [local_include_diff_test(), local_include_commander_add_test(), local_include_conveyor_to_display_test()]).then(function (i) {
	            console.log(i);
	        }).catch(function (i) {
	            console.log(i);
	        });
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	// file: shared/concat_promises

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'), jspm.import('lodash'), jspm.import('bash-color'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, module_lodash, module_bashcolor, ERR, wordwrap) {
	    var _ = function _(title, promises) {
	        return module_bluebird.all(module_lodash.map(promises, function (promise) {
	            return promise.then(function (i) {
	                return module_bluebird.resolve([false, i]);
	            }, function (i) {
	                return module_bluebird.resolve([true, i]);
	            });
	        })).then(function (results) {
	            var _module_lodash$reduce = module_lodash.reduce(results, function (acc, result) {
	                return [acc[0] || result[0], acc[1].concat(result[1])];
	            }, [false, [module_bashcolor.blue('\n' + title + '\n')]]),
	                _module_lodash$reduce2 = _slicedToArray(_module_lodash$reduce, 2),
	                reject = _module_lodash$reduce2[0],
	                strings = _module_lodash$reduce2[1];

	            if (reject) return module_bluebird.reject(strings.join('\n'));
	            return module_bluebird.resolve(strings.join('\n'));
	        });
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: diff/_test

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// load local
	__webpack_require__(14), __webpack_require__(16), __webpack_require__(17),
	// load regex
	__webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, local_include_sharedconcat_promises, local_include_sharedtest_compare, local_include__, regex_test_data09yaml__test_data1yaml, regex_test_data09yaml__test_data2yaml, regex_test_data09yaml__test_data3yaml, regex_test_data09yaml__test_data4yaml, regex_test_data09yaml__test_data5yaml, regex_test_data09yaml__test_data6yaml, ERR, wordwrap) {
	    var regex_test_data09yaml = {
	        by_file: {},
	        by_folder: {} };
	    regex_test_data09yaml.by_file['1'] = regex_test_data09yaml__test_data1yaml;
	    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data1yaml;
	    regex_test_data09yaml.by_file['2'] = regex_test_data09yaml__test_data2yaml;
	    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data2yaml;
	    regex_test_data09yaml.by_file['3'] = regex_test_data09yaml__test_data3yaml;
	    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data3yaml;
	    regex_test_data09yaml.by_file['4'] = regex_test_data09yaml__test_data4yaml;
	    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data4yaml;
	    regex_test_data09yaml.by_file['5'] = regex_test_data09yaml__test_data5yaml;
	    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data5yaml;
	    regex_test_data09yaml.by_file['6'] = regex_test_data09yaml__test_data6yaml;
	    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data6yaml;
	    var _ = function _() {
	        var ffs = {
	            none: function none(i) {
	                return i;
	            },
	            red: function red(i) {
	                return '<r>' + i + '</r>';
	            },
	            green: function green(i) {
	                return '<g>' + i + '</g>';
	            },
	            blue: function blue(i) {
	                return '<b>' + i + '</b>';
	            } };

	        return local_include_sharedconcat_promises('diff test', module_lodash.map(module_lodash.toPairs(regex_test_data09yaml.by_file), function (data) {
	            return local_include_sharedtest_compare(data[0], data[1].diff, local_include__(data[1].before, data[1].after, ffs));
	        }));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: shared/test_compare

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'), jspm.import('bash-color'),
	// load local
	__webpack_require__(17),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, module_bashcolor, local_include_diff_, ERR, wordwrap) {
	    var _ = function _(test_name, expected, generated) {
	        var diff = local_include_diff_(expected, generated);
	        if (!diff) return module_bluebird.resolve(module_bashcolor.green('test ' + test_name + ' passed'));
	        return module_bluebird.reject(module_bashcolor.red('test ' + test_name + ' failed') + '\n\n' + diff);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: diff/_

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('smf-deep-diff'),
	// load local
	__webpack_require__(18), __webpack_require__(19),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_smfdeepdiff, local_include_sharedwordwrap, local_include_dump, ERR, wordwrap) {
	    var import_diffdiff = module_smfdeepdiff.diff;
	    var _ = function _(expected, generated, ffs) {
	        if (!expected && !generated) return;
	        var diff = import_diffdiff(expected, generated);
	        if (diff) return 'expected:\n' + local_include_sharedwordwrap('', local_include_dump({ diff: diff, obj: expected, format_funcs: ffs })) + '\ngenerated:\n' + local_include_sharedwordwrap('', local_include_dump({ diff: diff, obj: generated, format_funcs: ffs })) + '\n';
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	// file: shared/wordwrap

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('wordwrap'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_wordwrap, ERR, wordwrap) {
	    var _ = function _(indent, text) {
	        if (!text) text = 'undefined';
	        return '.   ' + module_wordwrap(0, 81)(text.split('\n').join('\n.   ')).split('\n').map(function (stack_line) {
	            return indent + stack_line;
	        }).join('\n');
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: diff/dump

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// load local
	__webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, local_include_dump_set_up, local_include_get_current_diff, local_include_dump_array, local_include_dump_table, local_include_dump_val, ERR, wordwrap) {
	    var _ = function _(i) {
	        i = local_include_dump_set_up(i);
	        i.current_diff = local_include_get_current_diff(i.diff, i.path);

	        var ff = i.format_funcs.none;
	        if (i.current_diff) {
	            var kind = i.current_diff.kind;
	            if (kind === 'E') ff = i.format_funcs.blue;
	            if (kind === 'N') ff = i.format_funcs.green;
	            if (kind === 'D') ff = i.format_funcs.red;
	        }

	        if (module_lodash.isArray(i.obj)) return ff(local_include_dump_array(i, _));
	        if (module_lodash.isObject(i.obj)) return ff(local_include_dump_table(i, _));
	        return ff(local_include_dump_val(i));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	// file: diff/dump_set_up

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bash-color'), jspm.import('chalk'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bashcolor, module_chalk, ERR, wordwrap) {
	    var _ = function _(i) {
	        if (!('format_funcs' in i) || !i.format_funcs) i.format_funcs = {
	            none: function none(i) {
	                return i;
	            },
	            red: module_bashcolor.blue,
	            green: module_bashcolor.green,
	            blue: function blue(i) {
	                return module_chalk.styles.bold.open + i + module_chalk.styles.bold.close;
	            } };

	        if (!i.expected) i.expected = '';
	        if (!i.generated) i.generated = '';
	        if (!('format' in i)) i.format = function (a) {
	            return a;
	        };
	        if (!('path' in i)) i.path = [];

	        return i;
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	// file: diff/get_current_diff

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, ERR, wordwrap) {
	    var _ = function _(diff, path) {
	        return module_lodash.reduce(diff, function (acc, val) {
	            if (acc) return acc;
	            if (!('path' in val)) return val;
	            if (module_lodash.isEqual(val.path, path)) return val;
	        }, null);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	// file: diff/dump_array

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, ERR, wordwrap) {
	    var _ = function _(i, dump) {
	        var arr = i.obj;
	        var path = i.path;
	        var current_diff_i = null;
	        if (i.current_diff) current_diff_i = i.current_diff.index;
	        i.current_diff = null;
	        return module_lodash.times(arr.length, function (n) {
	            i.path = module_lodash.clone(path);
	            i.path.push(n);
	            i.obj = arr[n];
	            var item_str = dump(i);
	            if (n === current_diff_i) {
	                item_str = i.format_funcs.blue(item_str);
	            }
	            return '- ' + item_str.replace(/\n/g, '\n  ');
	        }).join('\n');
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	// file: diff/dump_table

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, ERR, wordwrap) {
	    var _ = function _(i, dump) {
	        var path = i.path;
	        var table = i.obj;
	        var current_diff_i = null;
	        if (i.current_diff) current_diff_i = i.current_diff.index;
	        i.current_diff = null;
	        var ret = module_lodash.values(module_lodash.mapValues(i.obj, function (val, key) {
	            i.path = module_lodash.clone(path);
	            i.path.push(key);
	            i.obj = table[key];
	            var item_str = dump(i);
	            return key + ': ' + item_str.replace(/\n/g, '\n  ');
	        })).join('\n');
	        return ret;
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	// file: diff/dump_val

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {
	    var _ = function _(i) {
	        if (!i.obj) i.obj = 'null';
	        return i.format(i.obj.toString());
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = {
		"before": "abc",
		"after": "abc",
		"diff": null
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = {
		"before": "abc",
		"after": "abcd",
		"diff": "expected:\n.   <b>abc</b>\ngenerated:\n.   <b>abcd</b>\n"
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = {
		"before": [
			1,
			2,
			3
		],
		"after": [
			1,
			2
		],
		"diff": "expected:\n.   - 1\n.   - 2\n.   - <b>3</b>\ngenerated:\n.   - 1\n.   - 2\n"
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = {
		"before": {
			"a": 1,
			"b": 2
		},
		"after": {
			"a": 1,
			"b": 3
		},
		"diff": "expected:\n.   a: 1\n.   b: <b>2</b>\ngenerated:\n.   a: 1\n.   b: <b>3</b>\n"
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = {
		"before": {
			"a": 1,
			"b": 2
		},
		"after": {
			"a": 1
		},
		"diff": "expected:\n.   a: 1\n.   b: <r>2</r>\ngenerated:\n.   a: 1\n"
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = {
		"before": {
			"a": {
				"b": {
					"c": {
						"d": 1
					}
				}
			},
			"e": {
				"f": {
					"g": 2
				}
			}
		},
		"after": {
			"a": {
				"b": null
			},
			"e": {
				"h": {
					"i": 3
				}
			}
		},
		"diff": "expected:\n.   a: b: <b>c: d: 1</b>\n.   e: f: <r>g: 2</r>\ngenerated:\n.   a: b: <b>null</b>\n.   e: h: <g>i: 3</g>\n"
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: commander_add/_test

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bash-color'),
	// load local
	__webpack_require__(16), __webpack_require__(32),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bashcolor, local_include_sharedtest_compare, local_include__, ERR, wordwrap) {
	    var _ = function _() {
	        console.log(module_bashcolor.blue('\ncommander_add test\n'));
	        var commander = {
	            command: function command(str) {
	                return {
	                    description: function description(_description) {
	                        return {
	                            action: function action(func) {
	                                return {
	                                    call: function call() {
	                                        return local_include_sharedtest_compare('result', func());
	                                    } };
	                            } };
	                    } };
	            } };
	        return local_include__(commander, './commander_add/before_data');
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: commander_add/_

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'),
	// load regex
	__webpack_require__(33), __webpack_require__(34), __webpack_require__(35),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, regex__apiyaml__before_datab_apiyaml, regex__apiyaml__before_datae_apiyaml, regex__apiyaml__before_datasubfolderf_apiyaml, ERR, wordwrap) {
	    var regex__apiyaml = {
	        by_file: {},
	        by_folder: {} };
	    regex__apiyaml.by_file['b_api'] = regex__apiyaml__before_datab_apiyaml;
	    regex__apiyaml.by_folder['before_data'] = regex__apiyaml__before_datab_apiyaml;
	    regex__apiyaml.by_file['e_api'] = regex__apiyaml__before_datae_apiyaml;
	    regex__apiyaml.by_folder['before_data'] = regex__apiyaml__before_datae_apiyaml;
	    regex__apiyaml.by_file['f_api'] = regex__apiyaml__before_datasubfolderf_apiyaml;
	    regex__apiyaml.by_folder['subfolder'] = regex__apiyaml__before_datasubfolderf_apiyaml;
	    var _ = function _(commander, path) {
	        console.log(regex__apiyaml);
	        return module_bluebird.resolve();
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = {
		"cli": "123 456",
		"description": "desc",
		"api": "12 34 56"
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = {
		"cli": "123 456",
		"description": "desc",
		"api": "12 34 56"
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = {
		"cli": "123 456",
		"description": "desc",
		"api": "12 34 56"
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: conveyor_to_display/_test

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// load local
	__webpack_require__(14), __webpack_require__(16), __webpack_require__(37),
	// load regex
	__webpack_require__(38), __webpack_require__(40), __webpack_require__(41), __webpack_require__(42), __webpack_require__(43), __webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, local_include_sharedconcat_promises, local_include_sharedtest_compare, local_include_sharedreject, regex_15__1_pre_ast, regex_15__2_ast, regex_15__3_ast_transformed, regex_15__4_generated, regex_15__5_display, regex_after_data05yaml__after_data0_pathyaml, regex_after_data05yaml__after_data1_pre_astyaml, regex_after_data05yaml__after_data2_astyaml, regex_after_data05yaml__after_data3_ast_transformedyaml, regex_after_data05yaml__after_data4_generatedyaml, regex_after_data05yaml__after_data5_displayyaml, ERR, wordwrap) {
	    var regex_15 = {
	        by_file: {},
	        by_folder: {} };
	    regex_15.by_file['1_pre_ast'] = regex_15__1_pre_ast;
	    regex_15.by_folder['undefined'] = regex_15__1_pre_ast;
	    regex_15.by_file['2_ast'] = regex_15__2_ast;
	    regex_15.by_folder['undefined'] = regex_15__2_ast;
	    regex_15.by_file['3_ast_transformed'] = regex_15__3_ast_transformed;
	    regex_15.by_folder['undefined'] = regex_15__3_ast_transformed;
	    regex_15.by_file['4_generated'] = regex_15__4_generated;
	    regex_15.by_folder['undefined'] = regex_15__4_generated;
	    regex_15.by_file['5_display'] = regex_15__5_display;
	    regex_15.by_folder['undefined'] = regex_15__5_display;
	    var regex_after_data05yaml = {
	        by_file: {},
	        by_folder: {} };
	    regex_after_data05yaml.by_file['0_path'] = regex_after_data05yaml__after_data0_pathyaml;
	    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data0_pathyaml;
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
	    var _ = function _() {
	        var steps = regex_15.by_file;
	        var expected = module_lodash.values(regex_after_data05yaml.by_file);
	        return local_include_sharedconcat_promises('conveyor_to_display tests', module_lodash.map(module_lodash.values(steps), function (promise, index) {
	            return promise(expected[index]).then(function (result) {
	                var ret = local_include_sharedtest_compare(module_lodash.keys(steps)[index], expected[index + 1], result);
	                return ret;
	            }, local_include_sharedreject);
	        }));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	// file: shared/reject

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, ERR, wordwrap) {
	    var _ = function _(err) {
	        return module_bluebird.reject(err);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: conveyor_to_display/1_pre_ast

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('glob-promise'), jspm.import('read-files-promise'), jspm.import('bluebird'),
	// load local
	__webpack_require__(37), __webpack_require__(39),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_globpromise, module_readfilespromise, module_bluebird, local_include_sharedreject, local_include_sharedzip, ERR, wordwrap) {
	    var _ = function _(path) {
	        path = path.replace(/\\/g, '/');
	        var paths;
	        return module_globpromise(path + '/**/*.es6').then(function (filenames) {
	            paths = filenames.map(function (filename) {
	                return filename.replace(path + '/', '');
	            });
	            return module_readfilespromise(filenames, 'utf8');
	        }, local_include_sharedreject).then(function (files) {
	            files = local_include_sharedzip('path', paths, 'contents', files);
	            return module_bluebird.resolve(files);
	        }, local_include_sharedreject);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	// file: shared/zip

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

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	// file: conveyor_to_display/2_ast

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('acorn'), jspm.import('bluebird'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_acorn, module_bluebird, ERR, wordwrap) {
	    var _ = function _(files) {
	        var ret = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var file = _step.value;

	                try {
	                    ret.push({
	                        path: file['path'],
	                        contents: module_acorn.parse(file['contents'], {
	                            range: true,
	                            loc: true,
	                            ecmaVersion: 6,
	                            sourcetype: 'module' }) });
	                } catch (err) {
	                    return module_bluebird.reject(err);
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

	        return module_bluebird.resolve(ret);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	// file: conveyor_to_display/3_ast_transformed

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, ERR, wordwrap) {
	    var _ = function _(data) {
	        return module_bluebird.resolve(data);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	// file: conveyor_to_display/4_generated

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('astring'), jspm.import('bluebird'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_astring, module_bluebird, ERR, wordwrap) {
	    var _ = function _(files) {
	        var ret = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var file = _step.value;

	                try {
	                    ret.push({
	                        path: file['path'],
	                        contents: module_astring.generate(file['contents'], {
	                            indent: '    ', lineEnd: '\n' }) });
	                } catch (err) {
	                    return module_bluebird.reject(err);
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

	        return module_bluebird.resolve(ret);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	// file: conveyor_to_display/5_display

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, ERR, wordwrap) {
	    var _ = function _(data) {
	        return module_bluebird.resolve(data);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = "./conveyor_to_display/before_data";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": "const a = (a, b) => {\n    console.log(a)\n}\n"
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

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 43,
				"body": [
					{
						"type": "VariableDeclaration",
						"start": 0,
						"end": 42,
						"declarations": [
							{
								"type": "VariableDeclarator",
								"start": 6,
								"end": 42,
								"id": {
									"type": "Identifier",
									"start": 6,
									"end": 7,
									"name": "a"
								},
								"init": {
									"type": "ArrowFunctionExpression",
									"start": 10,
									"end": 42,
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
										"end": 42,
										"body": [
											{
												"type": "ExpressionStatement",
												"start": 26,
												"end": 40,
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

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = [
		{
			"path": "a.es6",
			"contents": {
				"type": "Program",
				"start": 0,
				"end": 43,
				"body": [
					{
						"type": "VariableDeclaration",
						"start": 0,
						"end": 42,
						"declarations": [
							{
								"type": "VariableDeclarator",
								"start": 6,
								"end": 42,
								"id": {
									"type": "Identifier",
									"start": 6,
									"end": 7,
									"name": "a"
								},
								"init": {
									"type": "ArrowFunctionExpression",
									"start": 10,
									"end": 42,
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
										"end": 42,
										"body": [
											{
												"type": "ExpressionStatement",
												"start": 26,
												"end": 40,
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

/***/ }),
/* 48 */
/***/ (function(module, exports) {

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

/***/ }),
/* 49 */
/***/ (function(module, exports) {

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

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  __webpack_require__(13),
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

/***/ })
/******/ ]);
    if (!module.parent) {
        module.exports.then(function(f) {f(function (er) {
            if (er) {
               console.log(er.toString());
            }
        });});
    }