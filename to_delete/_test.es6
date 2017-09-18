() => {
    .. p.config({warnings: false, longStackTraces: false});
    .. marked.setOptions({renderer: new .. marked-terminal()});

    . shared/concat_promises('test results:', [
        //. diff/_test(),
        //. conveyor_to_display/_test(),
        //. unbrace/_test(),
        . set_up/_test
        //require('./set_lambda_state_version/_test'),
        //require('./build_all/_test'),
        //require('./build/_test'),
        //require('./overwrite_tools/_test'),
        //require('./set_updatables_version/_test'),
    ])
    .then(i => {console.log(i);})
    .catch(i => {console.log(i);});
};
