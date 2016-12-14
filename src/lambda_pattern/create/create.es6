const fs = require('fs-extra');

const create = (root_path, project_name, year, cb) => {
    const skel_path = __dirname + '/../../skeleton';
    const gen_path = root_path + '/' + project_name;
    fs.copy(skel_path, gen_path, cont(err));

    const temp_module_path = gen_path + '/src/project_name';
    const module_path = gen_path + '/src/' + project_name;
    fs.move(temp_module_path, module_path, cont(err));

    const temp_index_path = module_path + '/project_name.es6';
    const index_path = module_path + '/' + project_name + '.es6';
    fs.move(temp_index_path, index_path, cont(err));

    const temp_test_path = module_path + '/project_name_test.es6';
    const test_path = module_path + '/' + project_name + '_test.es6';
    fs.move(temp_test_path, test_path, cont(err));

    fs.readFile(gen_path + '/README.md', 'utf8', cont(err, readme));
    readme = readme.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/README.md', readme, cont(err, readme));
    cb(null);};

module.exports = create;
