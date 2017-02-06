const _ = (commander, mu_src_path) => {
    const success_message =
            'build the tools and the project';
    commander
        .command('build all')
        .description('built the code and the project')
        .action((project_name) => {
            console.log(success_message);});};
