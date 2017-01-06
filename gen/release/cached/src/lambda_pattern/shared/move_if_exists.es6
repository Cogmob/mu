const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');

const move_if_exists = (from, to, cb) => {
    const handle_response = () => {
        cb();};

    fs.move(from, to, handle_response);};

module.exports = move_if_exists;
