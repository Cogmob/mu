var r = require('ramda');
const merge = require('object-merge-override');
const fs = require('fs-extra');
const apply_template = require('string-template');
const yaml = require('js-yaml');

const _ = (
    mu_src_path, metadata, gen_path, deps, dev_deps, cb) => {
    const map_to_str = (i) => {
        const ret = r.map(
            pair => '"' + pair[0] + '": "' + pair[1] + '"',
            r.toPairs(i));
        return ret.join(',\n    ');}

    fs.readFile(
        mu_src_path + '/lambda_pattern/shared/default_package_values.yaml',
        'utf8',
        cont(err, def_vals_yaml));
    const def_vals = yaml.safeLoad(def_vals_yaml);
    fs.readFile(
        mu_src_path + '/lambda_pattern/shared/package_template.json',
        'utf8',
        cont(err, template));
    var replace = merge([metadata, def_vals]);
    replace.dependencies = map_to_str(deps);
    replace.dev_dependencies = map_to_str(dev_deps);
    const s = apply_template(template, replace);
    fs.writeFile(
        gen_path + '/package.json',
        s,
        cb);};
