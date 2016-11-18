const create = require('./create');
const path = require('path');

const lambda_pattern = (cb) => {
    const command = process.argv[0];

    if (command === 'create') {
        return create_fn(cb);}
    
    cb('help text ...');};

const create_fn = (cb) => {
    if (!process.argv[1]) {
        return cb('no project name given');}
    create(process.cwd(), process.argv[1], cb);};


module.exports = lambda_pattern;
