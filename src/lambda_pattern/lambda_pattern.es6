const create = require('./create/create');
const store = require('./store/store');
const path = require('path');
const is_function = require('is-function');

const lambda_pattern = (path=process.cwd(), cb) => {
    const commands = {
        'create': create_fn(cb),
        'store': store_fn(cb),
        'overwrite': {
            'tools': store_fn(cb)}}

    get_command(process.argv, 2, commands)(path, cb);}

const get_command = (args, index, commands) => {
    const key = args[index];
    if (key in commands) {
        if (is_function(commands[key])) {
            return commands[key];}
        return get_command(args, index+1, commands[key]);}
    return (cb) => {
        cb('command \'' + command + '\' not found ... help text ...');};}

const create_fn = (cb) => {
    if (!process.argv[3]) {
        return cb('no project name given');}
    create(process.cwd(), process.argv[3], cb);};

const store_fn = (cb) => {
    if (!process.argv[3]) {
        return cb('please specify either bitbucket or github');}
    store(process.cwd(), process.argv[3], false, {is_ready: 'yes'}, cb);};

module.exports = lambda_pattern;
