const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const rsv = require('path').resolve;
const is_function = require('is-function');
const commander = require('commander');

//const store = require('./store/store');
const create_commander = require('./create/create_commander');
//const build_dev_commander = require('./build_dev/build_dev_commander');
//const continuation = require('continuation');

const cb = (err) => {
        if (err) {
            console.log(word_wrap(err.stack.replace(/\\/g, '\\ '), {
                trim: true,
                width: 80})
            .split('\n').forEach((stack_line) => {
                console.log(stack_line
                    .replace(/\\ /g, '\\')
                    .replace(/ at/g, '\nat')
                    .replace(/Error:/g, '\nError:'));}));
            t.fail();
            return t.end();}
        
    if (err) {
        console.log(err);}};

const set_up = (tool_root) => {
    create_commander(commander, tool_root, cb);
    //build_dev_commander(commander, cb);
    }

module.exports = {
    commander,
    set_up,
    run: () => commander.parse(process.argv)};

if (!module.parent) {
    set_up(rsv('../..'));
    commander.parse(process.argv);}
