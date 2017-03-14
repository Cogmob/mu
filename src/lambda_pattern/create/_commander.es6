const _ = (commander, mu_src_path) => {
    const success_message =
            'created project \'{name}\' in your current directory';
    const cb = (e, project_name) => {
        if (e) {
            return console.log(e);}
        console.log(.. string_template(
            success_message,
            {name: project_name}));};

    commander
        .command('create project_name')
        .description('make a new lambda patern project')
        .action((project_name) => {
            . _(mu_src_path, process.cwd(), project_name, 2000, cont(err));
            const gen_path = __dirname + '/' + project_name;
            . ../shared/get_metadata(gen_path, cont(err, info));
            . ../set_up/_(mu_src_path, gen_path, info, cont(err));
            . ../build_tools/_(gen_path, cont(err));
            cb(null, project_name);})
}
