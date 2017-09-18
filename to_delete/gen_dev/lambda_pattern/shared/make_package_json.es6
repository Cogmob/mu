// file: shared/make_package_json

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('ramda'),
    jspm.import('fs-extra@^1.0.0'),
    jspm.import('js-yaml@^3.7.0'),
    jspm.import('object-merge-override@^0.1.0'),
    jspm.import('string-template@^1.0.0'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_ramda,
    module_fsextra100,
    module_jsyaml370,
    module_objectmergeoverride010,
    module_stringtemplate100,
    ERR,
        wordwrap) => {
        const import_read_filereadFile = module_fsextra100.readFile;
    const import_write_filewriteFile = module_fsextra100.writeFile;
const _ = (
        mu_src_path,
        metadata,
        gen_path,
        deps,
        dev_deps,
        cb) => {
    const map_to_str = (i) => {
        const ret = module_ramda.map(
            pair => '"' + pair[0] + '": "' + pair[1] + '"',
            module_ramda.toPairs(i));
        return ret.join(',\n    ');}

    import_read_filereadFile(
        mu_src_path + '/lambda_pattern/shared/default_package_values.yaml',
        'utf8',
        cont(err, def_vals_yaml));
                if (ERR(err, cb)) {
                    return;}
                    
    const def_vals = module_jsyaml370.safeLoad(def_vals_yaml);
    import_read_filereadFile(
        mu_src_path + '/lambda_pattern/shared/package_template.json',
        'utf8',
        cont(err, template));
                if (ERR(err, cb)) {
                    return;}
                    
    var replace = module_objectmergeoverride010([metadata, def_vals]);
    replace.dependencies = map_to_str(deps);
    replace.dev_dependencies = map_to_str(dev_deps);
    const s = module_stringtemplate100(template, replace);
    import_write_filewriteFile(
        gen_path + '/package.json',
        s,
        cb);};

    return _;}).catch((err) => {console.log(err);});
