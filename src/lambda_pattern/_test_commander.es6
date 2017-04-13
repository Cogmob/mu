(commander) => {
    const success_message =
            'tests complete';
    commander
        .command('test')
        .description('run all tests')
        .action(() => {
            . _test(cont(err));
            console.log(success_message);});};
