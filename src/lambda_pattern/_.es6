const is_function = require('is-function');
const commander = require('commander');

const create_commander = require('./create/__commander');

const _ = (add_other_commands) => {
    if (add_other_commands) {
        add_other_commands(commander, mu_src_path);
        return;}

    create_commander(commander, __dirname);
    commander.parse(process.argv);}

module.exports = _;

if (!module.parent) {
    _();}
