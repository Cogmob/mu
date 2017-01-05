const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const lambda_state_history = require('../shared/lambda_state_history');
const yaml = require('js-yaml');

const get_info = require('./get_info');
const update_history = require('./update_history');
const move_tools_scripts = require('./move_tools_scripts');

const overwrite_tools = (root, cb) => {
    get_info(root, cont(err, updatables_version, history));
            if (ERR(err, cb)) {
                return;}
                
    move_tools_scripts(root, history['current_state_version'], cont(err));
            if (ERR(err, cb)) {
                return;}
                
    update_history(root, history, updatables_version, cont(err, history));
            if (ERR(err, cb)) {
                return;}
                
    cb();}

module.exports = overwrite_tools;
