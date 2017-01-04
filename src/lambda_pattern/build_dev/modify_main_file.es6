const fs = require('fs-extra');
const rsv = require('path').resolve;

const modify_main_file = (root_path, cb) => {
    const main_path = root_path + '/.es6';
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
