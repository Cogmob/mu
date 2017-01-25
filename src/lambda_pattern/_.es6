const is_function = require('is-function');
const commander = require('commander');

//const store = require('./store/store');
const create_commander = require('./create/__commander');
//const build_dev_commander = require('./build_dev/build_dev_commander');
//const continuation = require('continuation');

const cb = (err) => {
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
    set_up('../..');
    commander.parse(process.argv);}
