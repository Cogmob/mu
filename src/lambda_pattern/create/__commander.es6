const create = require('./_');
const set_up = require('../set_up/_');
const get_metadata = require('../shared/get_metadata');

const _ = (commander, mu_src_path) => {
    const success_message =
            'created a lambda pattern project in your current directory';
    const cb = (e) => {
        if (e) {
            return console.log(e);}
        console.log(success_message)};

    commander
        .command('create project_name')
        .description('make a new lambda patern project')
        .action((project_name) => {
            create(
                mu_src_path,
                process.cwd(),
                project_name,
                2000,
                cont(err));
            get_metadata(__dirname + '/' + project_name, cont(err, info));
            set_up(
                mu_src_path,
                process.cwd() + '/' + project_name,
                info,
                cb);})};
