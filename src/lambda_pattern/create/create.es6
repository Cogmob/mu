const fs = require('fs-extra');

const create = (src_path, root, project_name, year, cb) => {
    const skel_path = src_path + '/lambda_pattern/skeleton_data';
    const gen_path = root + '/' + project_name;
    fs.copy(skel_path, gen_path, cont(err));

    fs.readFile(gen_path + '/readme.md', 'utf8', cont(err, readme));
    readme = readme.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/readme.md', readme, cont(err));

    fs.readFile(gen_path + '/_.es6', 'utf8', cont(err, index));
    index = index.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/_.es6', index, cont(err));

    fs.readFile(gen_path + '/_test.es6', 'utf8', cont(err, test_file));
    test_file = test_file.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/_test.es6', test_file, cont(err));

    fs.readFile(gen_path + '/meta/data.yaml', 'utf8', cont(err, meta));
    meta = meta.replace(/\[\[project_name\]\]/g, project_name);
    fs.writeFile(gen_path + '/meta/data.yaml', meta, cont(err));

    cb(null);};

module.exports = create;
