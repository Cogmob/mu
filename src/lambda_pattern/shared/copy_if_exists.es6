const fs = require('fs-extra');

const _ = (from, to, cb) => {
    const handle_response = () => {
        cb();};

    fs.copy(from, to, handle_response);};
