(mu_src_path,  root_path,  project_name,  year,  cb) => {
    const  gen_path  =  root_path  +  '/'  +  project_name;
    return .. concat_promises(null,  [
        .. copy_path(mu_src_path  +  '/skeleton_data',  gen_path),

        .. read_file(gen_path  +  '/readme.md',  'utf8'),
        i  =>  .. write_file(
            gen_path  +  '/readme.md',
            i.replace(/\[\[project_name\]\]/g,  project_name)),

        ..  read_file(gen_path  +  '/_.es6',  'utf8'),
        i  =>  .. write_file(
            gen_path  +  '/_.es6',
            index.replace(/\[\[project_name\]\]/g,  project_name)),

        .. read_file(gen_path  +  '/__test.es6',  'utf8'),
        i  =>  .. write_file(
            gen_path  +  '/__test.es6',
            test_file.replace(/\[\[project_name\]\]/g,  project_name)),

        .. read_file(gen_path  +  '/meta/data.yaml',  'utf8'),
        i  =>  .. write_file(
            gen_path  +  '/meta/data.yaml',
            meta.replace(/\[\[project_name\]\]/g,  project_name))]);};
