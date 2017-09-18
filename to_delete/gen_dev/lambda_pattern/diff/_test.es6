// file: diff/_test

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('lodash/fp'),
    // load local
    require('./../shared/concat_promises'),
    require('./../shared/test_compare'),
    require('./_'),
    // load regex
    require('./test_data/1.yaml'),
    require('./test_data/2.yaml'),
    require('./test_data/3.yaml'),
    require('./test_data/4.yaml'),
    require('./test_data/5.yaml'),
    require('./test_data/6.yaml'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_lodashfp,
    local_include_sharedconcat_promises,
    local_include_sharedtest_compare,
    local_include__,
    regex_test_data09yaml__test_data1yaml,
    regex_test_data09yaml__test_data2yaml,
    regex_test_data09yaml__test_data3yaml,
    regex_test_data09yaml__test_data4yaml,
    regex_test_data09yaml__test_data5yaml,
    regex_test_data09yaml__test_data6yaml,
    ERR,
        wordwrap) => {
        const regex_test_data09yaml = {
        by_file: {},
        by_folder: {}};
    regex_test_data09yaml.by_file['1'] = regex_test_data09yaml__test_data1yaml;
    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data1yaml;
    regex_test_data09yaml.by_file['2'] = regex_test_data09yaml__test_data2yaml;
    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data2yaml;
    regex_test_data09yaml.by_file['3'] = regex_test_data09yaml__test_data3yaml;
    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data3yaml;
    regex_test_data09yaml.by_file['4'] = regex_test_data09yaml__test_data4yaml;
    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data4yaml;
    regex_test_data09yaml.by_file['5'] = regex_test_data09yaml__test_data5yaml;
    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data5yaml;
    regex_test_data09yaml.by_file['6'] = regex_test_data09yaml__test_data6yaml;
    regex_test_data09yaml.by_folder['test_data'] = regex_test_data09yaml__test_data6yaml;
const _ = () => {
    const ffs = {
        none: i => {return i;},
        red: i => {return '<r>' + i + '</r>';},
        green: i => {return '<g>' + i + '</g>';},
        blue: i => {return '<b>' + i + '</b>';}};

    return local_include_sharedconcat_promises('diff test',
        module_lodashfp.map(
            module_lodashfp.toPairs(regex_test_data09yaml.by_file),

            data => {
                    return local_include_sharedtest_compare(
                        data[0],
                        data[1].diff, 
                        local_include__(data[1].before, data[1].after, ffs));}));};

    return _;}).catch((err) => {console.log(err);});
