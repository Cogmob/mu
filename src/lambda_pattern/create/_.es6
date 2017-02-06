const _ = (mu_src_path, root_path, project_name, year, cb) => {
    const skel_path = mu_src_path + '/skeleton_data';
    const gen_path = root_path + '/' + project_name;
    .. copy_file(skel_path, gen_path, cont(err));

    .. read_file(gen_path + '/readme.md', 'utf8', cont(err, readme));
    readme = readme.replace(/\[\[project_name\]\]/g, project_name);
    .. write_file(gen_path + '/readme.md', readme, cont(err));

    .. read_file(gen_path + '/_.es6', 'utf8', cont(err, index));
    index = index.replace(/\[\[project_name\]\]/g, project_name);
    .. write_file(gen_path + '/_.es6', index, cont(err));

    .. read_file(gen_path + '/__test.es6', 'utf8', cont(err, test_file));
    test_file = test_file.replace(/\[\[project_name\]\]/g, project_name);
    .. write_file(gen_path + '/__test.es6', test_file, cont(err));

    .. read_file(gen_path + '/meta/data.yaml', 'utf8', cont(err, meta));
    meta = meta.replace(/\[\[project_name\]\]/g, project_name);
    .. write_file(gen_path + '/meta/data.yaml', meta, cont(err));

    cb(null);};
