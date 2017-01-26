const is_function = require('is-function');
const commander = require('commander');

const create_commander = require('./create/__commander');

const _ = (updatables, config) => {
    updatables(commander, __dirname, config);}

module.exports = _;

if (!module.parent) {
    create_commander(commander, __dirname);
    commander.parse(process.argv);}
