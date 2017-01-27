const commander = require('commander');

const create_commander = require('./create/__commander');

create_commander(commander, __dirname);
commander.parse(process.argv);
