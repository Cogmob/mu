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

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var word_wrap = jspm.import('word-wrap');
	var ERR = jspm.import('async-stacktrace');
	// load local
	var local_include_build_all__commander = __webpack_require__(1);
	var _ = function _(commander, mu_src_path, config) {
	    local_include_build_all__commander(commander, mu_src_path);
	};

	module.exports = _;
	/* Generated by Continuation.js v0.1.7 */

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
	jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
	var word_wrap = jspm.import('word-wrap');
	var ERR = jspm.import('async-stacktrace');
	var _ = function _(commander, mu_src_path) {
	    var success_message = 'build the tools and the project';
	    commander.command('build all').description('built the code and the project').action(function (project_name) {
	        console.log(success_message);
	    });
	};

	module.exports = _;
	/* Generated by Continuation.js v0.1.7 */

/***/ }
/******/ ]);