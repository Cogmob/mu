const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

const get_info = (root, cb) => {
    fs.readFile(
        path.resolve(root, 'gen/dev/lambda_updatables/version'),
        'utf8',
        cont(err, updatables_version));
            if (ERR(err, cb)) {
                return;}
                

    fs.readFile(
        path.resolve(root, 'gen/stored/lambda_state_history.yaml'),
        'utf8',
        cont(err, history));
            if (ERR(err, cb)) {
                return;}
                

    history = yaml.safeLoad(history);

    cb(null, updatables_version, history);}

module.exports = get_info;
