var r = require('ramda');
const fs = require('fs-extra');
const apply_template = require('string-template');

const make_package_json = (src_path, metadata, path, deps, dev_deps, cb) => {
    const map_to_str = (i) => {
        const ret = r.map(
            pair => pair[0] + '": "' + pair[1] + '"',
            r.toPairs(i));
        return ret.join(',\n    ');}

    const replace = {
        project_name: 'aaa' + metadata['project_name'],
        abc: 'asdf',
        dependencies: 'map_to_str(deps)',
        dev_dependencies: map_to_str(dev_deps)};
    fs.readFile(
        src_path + '/lambda_pattern/shared/package_template',
        'utf8',
        cont(err, template));
    apply_template(template, replace);
    cb();}

module.exports = make_package_json;
