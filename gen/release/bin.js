#!/usr/bin/env node

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

	const jspm = eval('require')(
	    process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	const q = eval('require')(
	    process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	const promises = [
	    // load jspm
	    jspm.import('commander'),
	    jspm.import('optional'),
	    // load local
	    __webpack_require__(1),
	    // load regex
	    __webpack_require__(11),
	    __webpack_require__(15),
	    __webpack_require__(12),
	    __webpack_require__(13),
	    __webpack_require__(16),
	    __webpack_require__(14),
	    __webpack_require__(17),
	    // other
	    jspm.import('async-stacktrace'),
	    jspm.import('wordwrap')];
	module.exports = q.all(promises).spread((
	    module_commander,
	    module_optional,
	    local_include_create_commander,
	    regex_conveyor_to_displayes6__conveyor_to_display_js,
	    regex_conveyor_to_displayes6__conveyor_to_display_testjs,
	    regex_conveyor_to_displayes6__conveyor_to_display1_pre_astjs,
	    regex_conveyor_to_displayes6__conveyor_to_display2_astjs,
	    regex_conveyor_to_displayes6__conveyor_to_display3_ast_transformedjs,
	    regex_conveyor_to_displayes6__conveyor_to_display4_generatedjs,
	    regex_conveyor_to_displayes6__conveyor_to_display5_displayjs,
	    ERR,
	    wordwrap) => {
	    regex_conveyor_to_displayes6 = {
	        '_': regex_conveyor_to_displayes6__conveyor_to_display_js,
	        '_test': regex_conveyor_to_displayes6__conveyor_to_display_testjs,
	        '1_pre_ast': regex_conveyor_to_displayes6__conveyor_to_display1_pre_astjs,
	        '2_ast': regex_conveyor_to_displayes6__conveyor_to_display2_astjs,
	        '3_ast_transformed': regex_conveyor_to_displayes6__conveyor_to_display3_ast_transformedjs,
	        '4_generated': regex_conveyor_to_displayes6__conveyor_to_display4_generatedjs,
	        '5_display': regex_conveyor_to_displayes6__conveyor_to_display5_displayjs,
	    };

	const modules = regex_conveyor_to_displayes6;
	console.log(modules);

	local_include_create_commander(module_commander, __dirname);
	module_commander.parse(process.argv);
	console.log('optional');
	console.log(module_optional('./whatever'));
	}).catch((err) => {console.log(err);});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  __webpack_require__(2),
	  __webpack_require__(3),
	  __webpack_require__(4),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (local_include__, local_include_sharedget_metadata, local_include_set_up_, ERR, wordwrap) {
	  var _;
	  _ = function _(commander, mu_src_path) {
	    var success_message, cb;
	    success_message = 'created a lambda pattern project in your current directory';
	    cb = function cb(e) {
	      if (e) {
	        return console.log(e);
	      }
	      console.log(success_message);
	    };
	    console.log(commander);
	    commander.command('create project_name').description('make a new lambda patern project').action(function (project_name) {
	      var err, gen_path, info;
	      console.log('+ 1');
	      local_include__(mu_src_path, process.cwd(), project_name, 2000, function (arguments, _$param0) {
	        err = _$param0;
	        if (ERR(err, cb)) {
	          return;
	        }
	        console.log('+ 2');
	        gen_path = __dirname + '/' + project_name;
	        console.log('+ 3');
	        local_include_sharedget_metadata(gen_path, function (arguments, _$param1, _$param2) {
	          err = _$param1;
	          info = _$param2;
	          if (ERR(err, cb)) {
	            return;
	          }
	          console.log('+ 4');
	          local_include_set_up_(mu_src_path, gen_path, info, function (arguments, _$param3) {
	            err = _$param3;
	            if (ERR(err, cb)) {
	              return;
	            }
	            cb();
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
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  __webpack_require__(5),
	  __webpack_require__(7),
	  __webpack_require__(9),
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
/* 5 */
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
	  __webpack_require__(6),
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  __webpack_require__(8),
	  __webpack_require__(5),
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  __webpack_require__(8),
	  __webpack_require__(10),
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load local
	__webpack_require__(12), __webpack_require__(13), __webpack_require__(14),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (local_include_1_pre_ast, local_include_2_ast, local_include_4_generated, ERR, wordwrap) {
	    var _ = {
	        '1_pre_ast': local_include_1_pre_ast,
	        '2_ast': local_include_2_ast,
	        '4_generated': local_include_4_generated };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 12 */
/***/ function(module, exports) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('serialfs@0.0.22'),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_serialfs0022, ERR, wordwrap) {
	  var _;
	  _ = function _(path, cb) {
	    var err, code;
	    module_serialfs0022.list(path, function (arguments, _$param0, _$param1) {
	      err = _$param0;
	      code = _$param1;
	      if (ERR(err, cb)) {
	        return;
	      }
	      cb(null, code);
	    }.bind(this, arguments));
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
	jspm.import('acorn'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_acorn, ERR, wordwrap) {
	    var _ = function _(code, cb) {
	        var ast = module_acorn.parse(code, {
	            range: true,
	            loc: true,
	            ecmaVersion: 6,
	            sourcetype: 'module' });
	        return cb(null, ast);
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
	jspm.import('astring'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_astring, ERR, wordwrap) {
	    var _ = function _(ast, cb) {
	        return cb(null, module_astring(ast, { indent: '    ', lineEnd: '\n' }));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var jspm, q, promises;
	'use strict';
	jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	promises = [
	  jspm.import('fs-extra@^1.0.0'),
	  jspm.import('smf-deep-diff'),
	  jspm.import('js-yaml@3.8.1'),
	  __webpack_require__(12),
	  __webpack_require__(13),
	  __webpack_require__(14),
	  jspm.import('async-stacktrace'),
	  jspm.import('wordwrap')
	];
	module.exports = q.all(promises).spread(function (module_fsextra100, module_smfdeepdiff, module_jsyaml381, local_include_1_pre_ast, local_include_2_ast, local_include_4_generated, ERR, wordwrap) {
	  var import_read_filereadFile, import_diffdiff, import_yaml_readload, import_yaml_writedump, _;
	  import_read_filereadFile = module_fsextra100.readFile;
	  import_diffdiff = module_smfdeepdiff.diff;
	  import_yaml_readload = module_jsyaml381.load;
	  import_yaml_writedump = module_jsyaml381.dump;
	  _ = function _(cb) {
	    var after_path, err, files, expected, d, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, code, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _file;
	    local_include_1_pre_ast(__dirname + '/before_data', function (arguments, _$param0, _$param1) {
	      err = _$param0;
	      files = _$param1;
	      if (ERR(err, cb)) {
	        return;
	      }
	      import_read_filereadFile(__dirname + '/after_data/1_pre_ast.yaml', 'utf8', function (arguments, _$param2, _$param3) {
	        err = _$param2;
	        expected = _$param3;
	        if (ERR(err, cb)) {
	          return;
	        }
	        d = import_diffdiff(import_yaml_readload(expected), files);
	        if (d) {
	          return cb(import_yaml_writedump(d));
	        }
	        _iteratorNormalCompletion = true;
	        _didIteratorError = false;
	        _iteratorError = undefined;
	        (function (_$cont) {
	          try {
	            _iterator = files[Symbol.iterator]();
	            function _$loop_0(_$loop_0__$cont) {
	              if (!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) {
	                file = _step.value;
	                local_include_2_ast(file['contents'], function (arguments, _$param4, _$param5) {
	                  try {
	                    err = _$param4;
	                    code = _$param5;
	                    if (ERR(err, cb)) {
	                      return;
	                    }
	                    file['contents'] = code;
	                    _iteratorNormalCompletion = true;
	                    _$loop_0(_$loop_0__$cont);
	                  } catch (_$err) {
	                    _$cont(_$err);
	                  }
	                }.bind(this, arguments));
	              } else {
	                _$loop_0__$cont();
	              }
	            }
	            _$loop_0 = _$loop_0.bind(this);
	            _$loop_0(function () {
	              try {
	                _$cont();
	              } catch (_$err) {
	                _$cont(_$err);
	              }
	            });
	          } catch (_$err) {
	            _$cont(_$err);
	          }
	        }(function (err) {
	          if (err !== undefined) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          }
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	          after_path = __dirname + '/after_data/2_ast.yaml';
	          import_read_filereadFile(after_path, 'utf8', function (arguments, _$param6, _$param7) {
	            err = _$param6;
	            expected = _$param7;
	            if (ERR(err, cb)) {
	              return;
	            }
	            import_yaml_readload(expected);
	            d = import_diffdiff(import_yaml_readload(expected), files);
	            if (d) {
	              console.log(import_yaml_writedump(JSON.parse(JSON.stringify(d))));
	              return cb(import_yaml_writedump(JSON.parse(JSON.stringify(d))));
	            }
	            _iteratorNormalCompletion2 = true;
	            _didIteratorError2 = false;
	            _iteratorError2 = undefined;
	            (function (_$cont) {
	              try {
	                _iterator2 = files[Symbol.iterator]();
	                function _$loop_1(_$loop_1__$cont) {
	                  if (!(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done)) {
	                    _file = _step2.value;
	                    local_include_4_generated(_file['contents'], function (arguments, _$param8, _$param9) {
	                      try {
	                        err = _$param8;
	                        code = _$param9;
	                        if (ERR(err, cb)) {
	                          return;
	                        }
	                        _file['contents'] = code;
	                        _iteratorNormalCompletion2 = true;
	                        _$loop_1(_$loop_1__$cont);
	                      } catch (_$err) {
	                        _$cont(_$err);
	                      }
	                    }.bind(this, arguments));
	                  } else {
	                    _$loop_1__$cont();
	                  }
	                }
	                _$loop_1 = _$loop_1.bind(this);
	                _$loop_1(function () {
	                  try {
	                    _$cont();
	                  } catch (_$err) {
	                    _$cont(_$err);
	                  }
	                });
	              } catch (_$err) {
	                _$cont(_$err);
	              }
	            }(function (err) {
	              if (err !== undefined) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	              }
	              try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                  _iterator2.return();
	                }
	              } finally {
	                if (_didIteratorError2) {
	                  throw _iteratorError2;
	                }
	              }
	              after_path = __dirname + '/after_data/4_generated.yaml';
	              import_read_filereadFile(after_path, 'utf8', function (arguments, _$param10, _$param11) {
	                err = _$param10;
	                expected = _$param11;
	                if (ERR(err, cb)) {
	                  return;
	                }
	                import_yaml_readload(expected);
	                d = import_diffdiff(import_yaml_readload(expected), files);
	                if (d) {
	                  return cb(import_yaml_writedump(JSON.parse(JSON.stringify(d))));
	                }
	                cb();
	              }.bind(this, arguments));
	            }));
	          }.bind(this, arguments));
	        }));
	      }.bind(this, arguments));
	    }.bind(this, arguments));
	  };
	  return _;
	}).catch(function (err) {
	  console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (ERR, wordwrap) {}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }
/******/ ]);