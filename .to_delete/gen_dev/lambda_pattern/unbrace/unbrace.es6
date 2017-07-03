// file: unbrace/unbrace

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('lodash/fp'),
    // load local
    require('./find_multiline_opened_and_closed'),
    require('./clear_line_ends'),
    require('./discover_sections'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_lodashfp,
    local_include_find_multiline_opened_and_closed,
    local_include_clear_line_ends,
    local_include_discover_sections,
    ERR,
        wordwrap) => {
    const _ = d => {
    d = d
        .split('\n')
        .map(line => {return {
            line: line,
            multiline_symbols: local_include_find_multiline_opened_and_closed(line)};})
        .map(local_include_clear_line_ends)
        .reduce(local_include_discover_sections, null);
    module_lodashfp.map(d, i => console.log(i));
    return d;};

    return _;}).catch((err) => {console.log(err);});
