const fs = require('fs-extra');
const rsv = require('path').resolve;

const modify_main_file = (root_path, project_name, cb) => {
    const main_path = rsv(
        root_path, 'gen/dev/src', project_name, project_name + '.es6');
    fs.readFile(main_path, cont(err, main_file));
    main_file = main_file + `
if (!module.parent) {
    lambda_pattern(function (er) {
        if (er) {
           console.log(er.toString());
        }
    });
}`
    fs.writeFile(main_path, main_file, cb);};

module.exports = modify_main_file;