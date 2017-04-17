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
	    __webpack_require__(34),
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
	    var _ = function _(root, cb) {
	        var copy_if_exists = local_include_sharedcopy_if_exists;
	        var move_if_exists = local_include_sharedmove_if_exists;
	        var remove_if_exists = local_include_sharedremove_if_exists;
	        var convert_es6 = local_include_sharedconvert_es6;

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
	// load jspm
	jspm.import('marked'), jspm.import('marked-terminal'),
	// load local
	__webpack_require__(17),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_marked, module_markedterminal, local_include_diff_test, ERR, wordwrap) {
	    var _ = function _() {
	        module_marked.setOptions({ renderer: new module_markedterminal() });
	        var cb = function cb(err) {
	            if (err) {
	                console.log(wordwrap(20, 81)(err.stack.replace(/\\/g, '\\ ').replace(/^/gm, '.')).split('\n').forEach(function (stack_line) {
	                    console.log(stack_line.replace(/\\ /g, '\\').replace(/ at/g, '\nat').replace(/Error:/g, '\nError:'));
	                }));
	            }
	            console.log('error');
	        };

	        local_include_diff_test().catch(function (e) {
	            return console.log(e);
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
	jspm.import('lodash'),
	// load local
	__webpack_require__(18), __webpack_require__(19), __webpack_require__(27),
	// load regex
	__webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, local_include_sharedtable_to_array_auto, local_include__, local_include_sharedtest_compare, regex_test_data09yaml__test_data1yaml, regex_test_data09yaml__test_data2yaml, regex_test_data09yaml__test_data3yaml, regex_test_data09yaml__test_data4yaml, regex_test_data09yaml__test_data5yaml, regex_test_data09yaml__test_data6yaml, ERR, wordwrap) {
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
	        module_lodash.forEach(local_include_sharedtable_to_array_auto(regex_test_data09yaml.by_file), function (data) {
	            var diff = local_include__(data.val.before, data.val.after, {
	                red: function red(i) {
	                    return '<r>' + i + '</r>';
	                },
	                green: function green(i) {
	                    return '<g>' + i + '</g>';
	                },
	                none: function none(i) {
	                    return i;
	                },
	                blue: function blue(i) {
	                    return '<b>' + i + '</b>';
	                } });
	            local_include_sharedtest_compare(data.key, diff, data.val.diff);
	        });
	        return Promise.resolve();
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
	// load jspm
	jspm.import('lodash'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, ERR, wordwrap) {
	    var _ = function _(table) {
	        return module_lodash.values(module_lodash.mapValues(table, function (val, key) {
	            return { key: key, val: val };
	        }));
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
	jspm.import('smf-deep-diff'),
	// load local
	__webpack_require__(20), __webpack_require__(21), __webpack_require__(22),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_smfdeepdiff, local_include_get_ffs, local_include_sharedwordwrap, local_include_dump, ERR, wordwrap) {
	    var import_diffdiff = module_smfdeepdiff.diff;
	    var _ = function _(a, b, ffs) {
	        if (!ffs) ffs = local_include_get_ffs();
	        var diff = import_diffdiff(a, b);
	        if (diff) return 'lhs:\n' + local_include_sharedwordwrap('.   ', local_include_dump({ diff: diff, obj: a, lhs: true, format_funcs: ffs })) + '\nrhs:\n' + local_include_sharedwordwrap('.   ', local_include_dump({ diff: diff, obj: b, lhs: false, format_funcs: ffs }));
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
	jspm.import('bash-color'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bashcolor, ERR, wordwrap) {
	    var _ = function _() {
	        return {
	            none: function none(i) {
	                return i;
	            },
	            red: module_bashcolor.blue,
	            green: module_bashcolor.green,
	            blue: module_bashcolor.blue };
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
	// load jspm
	jspm.import('wordwrap'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_wordwrap, ERR, wordwrap) {
	    var _ = function _(indent, text) {
	        if (!text) text = 'undefined';
	        return module_wordwrap(0, 81)(text).split('\n').map(function (stack_line) {
	            return indent + stack_line;
	        }).join('\n');
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash'),
	// load local
	__webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodash, local_include_get_current_diff, local_include_dump_array, local_include_dump_table, local_include_dump_val, ERR, wordwrap) {
	    var _ = function _(i) {
	        if (!('format' in i)) i.format = function (a) {
	            return a;
	        };
	        if (!('path' in i)) i.path = [];

	        i.current_diff = local_include_get_current_diff(i.diff, i.path);
	        var ff = i.format_funcs.none;
	        if (i.current_diff) {
	            console.log(i.current_diff);
	            var kind = i.current_diff.kind;
	            if (kind === 'E') ff = i.format_funcs.blue;
	            if (kind === 'N') ff = i.format_funcs.green;
	            if (kind === 'D') ff = i.format_funcs.red;
	        }

	        if (module_lodash.isArray(i.obj)) return ff(local_include_dump_array(i, _));
	        if (module_lodash.isPlainObject(i.obj)) return ff(local_include_dump_table(i, _));
	        return ff(local_include_dump_val(i));
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

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

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
	        i.diff = [];
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

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bash-color'),
	// load local
	__webpack_require__(21),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bashcolor, local_include_sharedwordwrap, ERR, wordwrap) {
	    var _ = function _(test_name, generated, expected) {
	        if (!generated) generated = '';
	        if (!expected) expected = '';
	        if (expected.replace(/\ |\n/g, '') != generated.replace(/\ |\n/g, '')) {
	            console.log(module_bashcolor.red('test ' + test_name + ' failed') + '\n    generated:\n' + local_include_sharedwordwrap('        ', generated) + '\n    expected:\n' + local_include_sharedwordwrap('        ', expected) + '\n');
	            return;
	        }
	        console.log(module_bashcolor.green('test ' + test_name + ' passed'));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
		"before": "abc",
		"after": "abc",
		"diff": null
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		"before": "abc",
		"after": "abcd",
		"diff": "lhs:\n.   <b>abc</b>\nrhs:\n.   <b>abcd</b>\n"
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

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
		"diff": "lhs:\n.   - 1\n.   - 2\n.   - <b>3</b>\nrhs:\n.   - 1\n.   - 2\n"
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
		"before": {
			"a": 1,
			"b": 2
		},
		"after": {
			"a": 1,
			"b": 3
		},
		"diff": "lhs:\n.   a: 1\n.   b: <b>2</b>\nrhs:\n.   a: 1\n.   b: <b>3</b>\n"
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
		"before": {
			"a": 1,
			"b": 2
		},
		"after": {
			"a": 1
		},
		"diff": "lhs:\n.   a: 1\n.   b: <r>2</r>\nrhs:\n.   a: 1\n"
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

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
		"diff": "lhs:\n.   a: b: <b>c: d: 1</b>\n.   e: f: <r>g: 2</r>\nrhs:\n.   a: b: <b>null</b>\n.   e: h: <g>i: 3</g>\n"
	};

/***/ },
/* 34 */
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