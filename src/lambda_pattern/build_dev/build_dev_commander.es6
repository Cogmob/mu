const get_metadata = require('../shared/get_metadata');
const build_dev = require('./build_dev');

const build_dev_commander = (commander, cb) => {
    commander
        .command('build_dev')
        .description('builds the dev folder ready to run the tests')
        .action((project_name) => {
            get_metadata(cont(err, metadata, root));
            build_dev(
                root,
                metadata['project_name'],
                2000,
                (err) => console.log(
                    'created project \'' + project_name + '\''));})}

module.exports = build_dev_commander;
