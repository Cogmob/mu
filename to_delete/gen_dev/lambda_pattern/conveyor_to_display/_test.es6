// file: conveyor_to_display/_test

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
    require('./../shared/reject'),
    // load regex
    require('./1_pre_ast'),
    require('./2_ast'),
    require('./3_ast_transformed'),
    require('./4_generated'),
    require('./5_display'),
    require('./after_data/0_path.yaml'),
    require('./after_data/1_pre_ast.yaml'),
    require('./after_data/2_ast.yaml'),
    require('./after_data/3_ast_transformed.yaml'),
    require('./after_data/4_generated.yaml'),
    require('./after_data/5_display.yaml'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_lodashfp,
    local_include_sharedconcat_promises,
    local_include_sharedtest_compare,
    local_include_sharedreject,
    regex_15__1_pre_ast,
    regex_15__2_ast,
    regex_15__3_ast_transformed,
    regex_15__4_generated,
    regex_15__5_display,
    regex_after_data05yaml__after_data0_pathyaml,
    regex_after_data05yaml__after_data1_pre_astyaml,
    regex_after_data05yaml__after_data2_astyaml,
    regex_after_data05yaml__after_data3_ast_transformedyaml,
    regex_after_data05yaml__after_data4_generatedyaml,
    regex_after_data05yaml__after_data5_displayyaml,
    ERR,
        wordwrap) => {
        const regex_15 = {
        by_file: {},
        by_folder: {}};
    regex_15.by_file['1_pre_ast'] = regex_15__1_pre_ast;
    regex_15.by_folder['undefined'] = regex_15__1_pre_ast;
    regex_15.by_file['2_ast'] = regex_15__2_ast;
    regex_15.by_folder['undefined'] = regex_15__2_ast;
    regex_15.by_file['3_ast_transformed'] = regex_15__3_ast_transformed;
    regex_15.by_folder['undefined'] = regex_15__3_ast_transformed;
    regex_15.by_file['4_generated'] = regex_15__4_generated;
    regex_15.by_folder['undefined'] = regex_15__4_generated;
    regex_15.by_file['5_display'] = regex_15__5_display;
    regex_15.by_folder['undefined'] = regex_15__5_display;
    const regex_after_data05yaml = {
        by_file: {},
        by_folder: {}};
    regex_after_data05yaml.by_file['0_path'] = regex_after_data05yaml__after_data0_pathyaml;
    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data0_pathyaml;
    regex_after_data05yaml.by_file['1_pre_ast'] = regex_after_data05yaml__after_data1_pre_astyaml;
    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data1_pre_astyaml;
    regex_after_data05yaml.by_file['2_ast'] = regex_after_data05yaml__after_data2_astyaml;
    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data2_astyaml;
    regex_after_data05yaml.by_file['3_ast_transformed'] = regex_after_data05yaml__after_data3_ast_transformedyaml;
    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data3_ast_transformedyaml;
    regex_after_data05yaml.by_file['4_generated'] = regex_after_data05yaml__after_data4_generatedyaml;
    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data4_generatedyaml;
    regex_after_data05yaml.by_file['5_display'] = regex_after_data05yaml__after_data5_displayyaml;
    regex_after_data05yaml.by_folder['after_data'] = regex_after_data05yaml__after_data5_displayyaml;
const _ = () => {
    const steps = regex_15.by_file;
    const expected = module_lodashfp.values(regex_after_data05yaml.by_file);
    return local_include_sharedconcat_promises('conveyor_to_display tests', module_lodashfp.map(
        module_lodashfp.values(steps),
        (promise, index) => {
            return promise(expected[index]).then(
                result => {
                    const ret = local_include_sharedtest_compare(
                        module_lodashfp.keys(steps)[index],
                        expected[index + 1],
                        result);
                    return ret;},
                local_include_sharedreject);}));};

    return _;}).catch((err) => {console.log(err);});
