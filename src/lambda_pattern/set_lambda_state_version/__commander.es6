const create = require('./_');

const _ = (commander, mu_src_path) => {
    const success_message =
            'set the lambda state version';
    commander
        .command('set lambda state version')
        .description('overwrite the tools.js file with a previously used tool')
        .action((project_name) => {
            console.log(success_message);});};
