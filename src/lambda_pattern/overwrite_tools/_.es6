(root_path, cb) => {
    const lambda_state_history = require('..' + ' lambda_state_history');
    const yaml = require('js-yaml');

    . get_info(root_path, cont(err, updatables_version, history));
    . move_tools_scripts(root_path, history['current_state_version'], cont(err));
    . update_history(root_path, history, updatables_version, cont(err, history));
    cb();}
