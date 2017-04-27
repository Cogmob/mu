() => {
    .. p.config({warnings: false, longStackTraces: false});
    .. marked.setOptions({renderer: new .. marked-terminal()});

    . shared/concat_promises('test results:', [
        . diff/_test(),
        . conveyor_to_display/_test(),
        //require('./set_up/__test');
        //require('./set_up/__test');
        //require('./set_lambda_state_version/__test');
        //require('./build_all/__test');
        //require('./build/__test');
        //require('./overwrite_tools/__test');
        //require('./set_updatables_version/__test');
    ])
    .then(i => {console.log(i);})
    .catch(i => {console.log(i);});
};
