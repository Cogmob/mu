const create = require('./_');

const _ = (commander, mu_src_path) => {
    const success_message =
            'set the updatables version';
    commander
        .command('set updatables version')
        .description('set the lambda updatables to a specific revision')
        .action((project_name) => {
            console.log(success_message);});};
