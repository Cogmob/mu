const fs = require('fs-extra');

const copy_if_exists = (from, to, cb) => {
    const handle_response = () => {
        cb();};

    fs.copy(from, to, handle_response);};

module.exports = copy_if_exists;
