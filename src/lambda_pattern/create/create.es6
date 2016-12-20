const fs = require('fs-extra');
const download_updatables = require('../shared/download_updatables');

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
    fs.writeFile(gen_path + '/README.md', readme, cont(err));

    fs.readFile(index_path, 'utf8', cont(err, index));
    index = index.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(index_path, index, cont(err));

    fs.readFile(test_path, 'utf8', cont(err, test_file));
    test_file = test_file.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(test_path, test_file, cont(err));

    const meta_path = module_path + '/metadata.yaml';
    fs.readFile(meta_path, 'utf8', cont(err, meta));
    meta = meta.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(meta_path, meta, cont(err));

    fs.ensureDir(gen_path + '/gen/dev', cont(err));
    download_updatables(gen_path, 'HEAD', cont(err));


    cb(null);};

module.exports = create;
