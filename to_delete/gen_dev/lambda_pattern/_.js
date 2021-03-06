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
	    // other
	        jspm.import('async-stacktrace'),
	        jspm.import('wordwrap')];
	    module.exports = q.all(promises).spread((
	        module_commander,
	    local_include__test_commander,
	    ERR,
	        wordwrap) => {
	    const _ = () => {};





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
	  __webpack_require__(3),
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

/***/ }),
/* 3 */
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
	__webpack_require__(4), __webpack_require__(5),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, module_marked, module_markedterminal, local_include_sharedconcat_promises, local_include_set_up_test, ERR, wordwrap) {
	    var _ = function _() {
	        module_bluebird.config({ warnings: false, longStackTraces: false });
	        module_marked.setOptions({ renderer: new module_markedterminal() });

	        local_include_sharedconcat_promises('test results:', [local_include_set_up_test]).then(function (i) {
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
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	// file: shared/concat_promises

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'), jspm.import('lodash/fp'), jspm.import('bash-color'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, module_lodashfp, module_bashcolor, ERR, wordwrap) {
	    var _ = function _(title, promises) {
	        return module_bluebird.all(module_lodashfp.map(promises, function (promise) {
	            return promise.then(function (i) {
	                return module_bluebird.resolve([false, i]);
	            }, function (i) {
	                return module_bluebird.resolve([true, i]);
	            });
	        }));
	        B.then(function (results) {
	            console.log(1234);

	            var _module_lodashfp$redu = module_lodashfp.reduce(function (acc, result) {
	                return [acc[0] || result[0], acc[1].concat(result[1])];
	            }, results, [false, [module_bashcolor.blue('\n' + title + '\n')]]),
	                _module_lodashfp$redu2 = _slicedToArray(_module_lodashfp$redu, 2),
	                reject = _module_lodashfp$redu2[0],
	                strings = _module_lodashfp$redu2[1];

	            console.log('5678');
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: set_up/_test

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('bluebird'),
	// load local
	__webpack_require__(6), __webpack_require__(7),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_bluebird, local_include_sharedjp, local_include_create_, ERR, wordwrap) {
	    var _ = function _() {
	        var mu_src_path = __dirname + '/../..';
	        var contents = {
	            gen: {
	                '.gitignore': true,
	                dev: { lambda_updatables: {
	                        example_version: true,
	                        'LICENCE.md': true } },
	                stored: { 'lambda_state_history.yaml': true } } };
	        var gen, exp;
	        return local_include_sharedjp(local_include_create_(mu_src_path, __dirname, 'test_project', 2000), module_bluebird.resolve('a'));
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	// file: shared/jp

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('lodash/fp'),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_lodashfp, ERR, wordwrap) {
	    var _ = function _() {
	        for (var _len = arguments.length, promises = Array(_len), _key = 0; _key < _len; _key++) {
	            promises[_key] = arguments[_key];
	        }

	        console.log(promises);
	        return module_lodashfp.reduce(function (acc, promise) {
	            return acc.then(promise);
	        }, promises);
	    };

	    return _;
	}).catch(function (err) {
	    console.log(err);
	});
	/* Generated by Continuation.js v0.1.7 */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// file: create/_

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	var q = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var promises = [
	// load jspm
	jspm.import('fs-extra@^1.0.0'),
	// load local
	__webpack_require__(6),
	// other
	jspm.import('async-stacktrace'), jspm.import('wordwrap')];
	module.exports = q.all(promises).spread(function (module_fsextra100, local_include_sharedjp, ERR, wordwrap) {
	    var import_copy_pathcopy = module_fsextra100.copy;
	    var import_read_filereadFile = module_fsextra100.readFile;
	    var import_write_filewriteFile = module_fsextra100.writeFile;
	    var _ = function _(mu_src_path, root_path, project_name, year, cb) {
	        var gen_path = root_path + '/' + project_name;
	        return local_include_sharedjp(import_copy_pathcopy(mu_src_path + '/skeleton_data', gen_path), import_read_filereadFile(gen_path + '/readme.md', 'utf8'), function (readme) {
	            return import_write_filewriteFile(gen_path + '/readme.md', readme.replace(/\[\[project_name\]\]/g, project_name));
	        }, import_read_filereadFile(gen_path + '/_.es6', 'utf8'), function (index) {
	            return import_write_filewriteFile(gen_path + '/_.es6', index.replace(/\[\[project_name\]\]/g, project_name));
	        }, import_read_filereadFile(gen_path + '/__test.es6', 'utf8'), function (test_file) {
	            return import_write_filewriteFile(gen_path + '/__test.es6', test_file.replace(/\[\[project_name\]\]/g, project_name));
	        }, import_read_filereadFile(gen_path + '/meta/data.yaml', 'utf8'), function (meta) {
	            return import_write_filewriteFile(gen_path + '/meta/data.yaml', meta.replace(/\[\[project_name\]\]/g, project_name));
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