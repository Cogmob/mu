const gulp = require('gulp');

// include project specific instructions
const project_tools = require('../lambda/tools.es6');

const build_dev = (project_path, modify_tools, cb) => {
    project_tools.before_build_dev(project_path, cb);

    build_code(project_path, cont(err)); if (err) {return cb(err);};

    project_tools.after_build_dev(project_path, cb);};
