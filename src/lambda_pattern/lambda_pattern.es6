const create = require('./create/create');
const store = require('./store/store');
const path = require('path');
const is_function = require('is-function');
const commander = require('commander');

commander
    .command('test [test_name]')
    .description('perform the test of the given name')
    .option('-s, --silent', 'supress output')
    .action((env, options) => {
        console.log('test is running');
        console.log('env:');
        console.log(env);
        console.log('options:');
        console.log(options);});

commander
    .command('create [project_name]')
    .description('make a new lambda patern project')
    .action((project_name) => {
        create(process.cwd, project_name, 2000, (err) => console.log(err));})

module.exports = {
    commander,
    run: () => commander.parse(process.argv)};

if (!module.parent) {
    commander.parse(process.argv);}
