() => {
    .. bluebird.config({warnings: false, longStackTraces: false});
    .. marked.setOptions({renderer: new .. marked-terminal()});

    .. bluebird.resolve()
    .then(. diff/_test())
    //.then(. commander_add/_test())
    .then(. conveyor_to_display/_test())
    //require('./set_up/__test');
    //require('./set_up/__test');
    //require('./set_lambda_state_version/__test');
    //require('./build_all/__test');
    //require('./build/__test');
    //require('./overwrite_tools/__test');
    //require('./set_updatables_version/__test');
    .catch(e => {console.log(e);});
}
