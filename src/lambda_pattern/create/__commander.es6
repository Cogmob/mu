const create = require('./_');

const _ = (commander, mu_src_path) => {
    const success_message =
            'created a lambda pattern project in your current directory';
    commander
        .command('create lambda_pattern')
        .description('make a new lambda patern project')
        .action((project_name) => {
            create(
                mu_src_path,
                process.cwd(),
                project_name,
                2000,
                (err) => {
                    if (err) {
                        console.log('error');
                        console.log(err);
                    } else {
                        console.log(success_message);}});});};
