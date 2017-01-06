const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');

const copy_if_exists = (from, to, cb) => {
    const handle_response = () => {
        cb();};

    fs.copy(from, to, handle_response);};

module.exports = copy_if_exists;
