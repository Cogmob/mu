const lambda_state_history = require('../shared/lambda_state_history');
const yaml = require('js-yaml');

const _ = (root_path, cb) => {
    . get_info(root_path, cont(err, updatables_version, history));
    . move_tools_scripts(root_path, history['current_state_version'], cont(err));
    . update_history(root_path, history, updatables_version, cont(err, history));
    cb();}
