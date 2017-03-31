const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
module.exports = {
    before_processing: function (project_path, cb) {
        return cb();},
    after_processing: function(project_path, cb) {
        return cb();},
    modify_tools: function(tools) {return tools;}};
