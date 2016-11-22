const create = require('./create');
const store = require('./store');
const path = require('path');

const lambda_pattern = (cb) => {
    const command = process.argv[2];

    if (command === 'create') {
        return create_fn(cb);}
    
    if (command === 'store') {
        return store_fn(cb);}
    
    cb('command \'' + command + '\' not found ... help text ...');};

const create_fn = (cb) => {
    if (!process.argv[3]) {
        return cb('no project name given');}
    create(process.cwd(), process.argv[3], cb);};

const store_fn = (cb) => {
    if (!process.argv[3]) {
        return cb('please specify either bitbucket or github');}
    store(process.cwd(), process.argv[3], false, {is_ready: 'yes'}, cb);};

module.exports = lambda_pattern;
