#!/usr/bin/env node

'use strict';

var create = require('./create');
var store = require('./store');
var path = require('path');

var lambda_pattern = function lambda_pattern(cb) {
    var command = process.argv[0];

    if (command === 'create') {
        return create_fn(cb);
    }

    if (command === 'store') {
        return store_fn(cb);
    }

    cb('command \'' + command + '\' not found ... help text ...');
};

var create_fn = function create_fn(cb) {
    if (!process.argv[1]) {
        return cb('no project name given');
    }
    create(process.cwd(), process.argv[1], cb);
};

var store_fn = function store_fn(cb) {
    if (!process.argv[1]) {
        return cb('please specify either bitbucket or github');
    }
    store(process.cwd(), process.argv[1], false, { is_ready: 'yes' }, cb);
};

module.exports = lambda_pattern;

if (!module.parent) {
    lambda_pattern(function (er) {
        if (er) {
            console.log(er.toString());
        }
    });
}
/* Generated by Continuation.js v0.1.7 */
