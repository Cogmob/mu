"use strict";

module.exports = {
    before_processing: function before_processing(project_path, cb) {
        return cb();
    },
    after_processing: function after_processing(project_path, cb) {
        return cb();
    },
    modify_tools: function modify_tools(tools) {
        return tools;
    } };
/* Generated by Continuation.js v0.1.7 */