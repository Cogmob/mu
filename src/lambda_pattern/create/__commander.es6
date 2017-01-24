const create = require('./_');

const _ = (commander, tool_root, cb) => {
    commander
        .command('create [project_name]')
        .description('make a new lambda patern project')
        .action((project_name) => {
            create(
                tool_root,
                process.cwd(),
                project_name,
                2000,
                (err) => console.log(
                    'created project \'' + project_name + '\''));})}
