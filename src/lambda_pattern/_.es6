{
    _: (updatables, config) => {
        . create/_commander(.. commander, __dirname);
        .. commander.parse(process.argv);},
    test: . _test};

if (require.main === module) {
    . _test_commander(.. commander);
    .. commander.parse(process.argv);}
