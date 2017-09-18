// file: create/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('fs-extra@^1.0.0'),
    // load local
    require('./../shared/jp'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_fsextra100,
    local_include_sharedjp,
    ERR,
        wordwrap) => {
        const import_copy_pathcopy = module_fsextra100.copy;
    const import_read_filereadFile = module_fsextra100.readFile;
    const import_write_filewriteFile = module_fsextra100.writeFile;
const _ = (mu_src_path,  root_path,  project_name,  year,  cb) => {
    const  gen_path  =  root_path  +  '/'  +  project_name;
    return local_include_sharedjp(
        import_copy_pathcopy(mu_src_path  +  '/skeleton_data',  gen_path),

        import_read_filereadFile(gen_path  +  '/readme.md',  'utf8'),
        readme  =>  import_write_filewriteFile(
            gen_path  +  '/readme.md',
            readme.replace(/\[\[project_name\]\]/g,  project_name)),

        import_read_filereadFile(gen_path  +  '/_.es6',  'utf8'),
        index  =>  import_write_filewriteFile(
            gen_path  +  '/_.es6',
            index.replace(/\[\[project_name\]\]/g,  project_name)),

        import_read_filereadFile(gen_path  +  '/__test.es6',  'utf8'),
        test_file  =>  import_write_filewriteFile(
            gen_path  +  '/__test.es6',
            test_file.replace(/\[\[project_name\]\]/g,  project_name)),

        import_read_filereadFile(gen_path  +  '/meta/data.yaml',  'utf8'),
        meta  =>  import_write_filewriteFile(
            gen_path  +  '/meta/data.yaml',
            meta.replace(/\[\[project_name\]\]/g,  project_name)));};

    return _;}).catch((err) => {console.log(err);});
