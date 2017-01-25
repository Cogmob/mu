const create = require('./_');

const _ = (commander, mu_src_path, cb) => {
    commander
        .command('create [project_name]')
        .description('make a new lambda patern project')
        .action((project_name) => {
            create(
                mu_src_path,
                process.cwd(),
                project_name,
                2000,
                (err) => {
                    console.log('error');
                    console.log(err);});});};
