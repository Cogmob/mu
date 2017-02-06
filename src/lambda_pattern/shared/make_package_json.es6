const _ = (
    mu_src_path, metadata, gen_path, deps, dev_deps, cb) => {
    const map_to_str = (i) => {
        const ret = .. ramda.map(
            pair => '"' + pair[0] + '": "' + pair[1] + '"',
            .. ramda.toPairs(i));
        return ret.join(',\n    ');}

    .. fs.readFile(
        mu_src_path + '/lambda_pattern/shared/default_package_values.yaml',
        'utf8',
        cont(err, def_vals_yaml));
    const def_vals = .. js-yaml.safeLoad(def_vals_yaml);
    .. fs.readFile(
        mu_src_path + '/lambda_pattern/shared/package_template.json',
        'utf8',
        cont(err, template));
    var replace = .. object-merge-override([metadata, def_vals]);
    replace.dependencies = map_to_str(deps);
    replace.dev_dependencies = map_to_str(dev_deps);
    const s = .. string-template(template, replace);
    .. fs.writeFile(
        gen_path + '/package.json',
        s,
        cb);};
