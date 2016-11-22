const create = require('./create');
const store = require('./store');
const path = require('path');

const lambda_pattern = (cb) => {
    const command = process.argv[0];

    if (command === 'create') {
        return create_fn(cb);}
    
    if (command === 'store') {
        return store_fn(cb);}
    
    cb('command not found ... help text ...');};

const create_fn = (cb) => {
    if (!process.argv[1]) {
        return cb('no project name given');}
    create(process.cwd(), process.argv[1], cb);};

const store_fn = (cb) => {
    if (!process.argv[1]) {
        return cb('please specify either bitbucket or github');}
    store(process.cwd(), process.argv[1], cb);};

module.exports = lambda_pattern;
