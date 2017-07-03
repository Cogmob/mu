// file: shared/join_tables

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('ramda'),
    // load local
    require('./set_obj_value'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_ramda,
    local_include_set_obj_value,
    ERR,
        wordwrap) => {
        const import_map_objectmapObjIndexed = module_ramda.mapObjIndexed;
const _ = (tables) => {
    var ret = {};

    tables.forEach((table) => {
        const [new_key, entries] = table;
        import_map_objectmapObjIndexed((val, key) => {
            ret = local_include_set_obj_value(ret, [key, new_key], val);}, entries);});

    return ret;};

    return _;}).catch((err) => {console.log(err);});
