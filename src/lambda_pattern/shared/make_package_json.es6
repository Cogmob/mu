const _ = (
        mu_src_path,
        metadata,
        gen_path,
        deps,
        dev_deps,
        cb) => {
    const map_to_str = (i) => {
        const ret = .. ramda.map(
            pair => '"' + pair[0] + '": "' + pair[1] + '"',
            .. ramda.toPairs(i));
        return ret.join(',\n    ');}

    .. read_file(
        mu_src_path + '/lambda_pattern/shared/default_package_values.yaml',
        'utf8',
        cont(err, def_vals_yaml));
    const def_vals = .. js_yaml.safeLoad(def_vals_yaml);
    .. read_file(
        mu_src_path + '/lambda_pattern/shared/package_template.json',
        'utf8',
        cont(err, template));
    var replace = .. object_merge_override([metadata, def_vals]);
    replace.dependencies = map_to_str(deps);
    replace.dev_dependencies = map_to_str(dev_deps);
    const s = .. string_template(template, replace);
    .. write_file(
        gen_path + '/package.json',
        s,
        cb);};
