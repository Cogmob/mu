const _ = (updatables, config) => {
    updatables(commander, __dirname, config);
    .. commander.parse(process.argv);}
