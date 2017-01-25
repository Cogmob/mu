const is_function = require('is-function');
const commander = require('commander');

const create_commander = require('./create/__commander');

const _ = (add_other_commands) => {
    const mu_src_path = __dirname;
    console.log('mu src path');
    console.log(mu_src_path);
    create_commander(commander, mu_src_path);
    add_other_commands(commander, mu_src_path);
    commander.parse(process.argv);}

module.exports = _;

if (!module.parent) {
    _((a, b) => {});}
