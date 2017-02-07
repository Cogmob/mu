const _ = (commander, mu_src_path) => {
    const success_message =
            'created a lambda pattern project in your current directory';
    const cb = (e) => {
        if (e) {
            return console.log(e);}
        console.log(success_message)};

    console.log(commander);
    commander
        .command('create project_name')
        .description('make a new lambda patern project')
        .action((project_name) => {
            console.log('+ 1');
            . _(mu_src_path, process.cwd(), project_name, 2000, cont(err));
            console.log('+ 2');
            const gen_path = __dirname + '/' + project_name;
            console.log('+ 3');
            . ../shared/get_metadata(gen_path, cont(err, info));
            console.log('+ 4');
            . ../set_up/_(mu_src_path, gen_path, info, cont(err));
            console.log('+ 5');
            . ../build_tools/_(gen_path, cont(err));
            console.log('+ 6');
            overwrite_tools(gen_path, cont(err));
            console.log('+ 7');
            cb();})};
