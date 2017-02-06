const _ = (commander, mu_src_path) => {
    const success_message =
            'replaced the tools scripts';
    commander
        .command('overwrite tools')
        .description('replace the tools.js file with the last built tools')
        .action((project_name) => {
            console.log(success_message);});};
