const fs = require('fs-extra');

const _ = (root_path, cb) => {
    const main_path = root_path + '/_.es6';
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
