// file: diff/_

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('smf-deep-diff'),
    // load local
    require('./../shared/wordwrap'),
    require('./dump'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_smfdeepdiff,
    local_include_sharedwordwrap,
    local_include_dump,
    ERR,
        wordwrap) => {
        const import_diffdiff = module_smfdeepdiff.diff;
const _ = (expected, generated, ffs) => {
    if (!expected && !generated) return;
    const diff = import_diffdiff(expected, generated);
    if (diff) return 'expected:\n'
        + local_include_sharedwordwrap('',
            local_include_dump({diff: diff, obj: expected, format_funcs: ffs}))
        + '\ngenerated:\n'
        + local_include_sharedwordwrap('',
            local_include_dump({diff: diff, obj: generated, format_funcs: ffs})) + '\n';}

    return _;}).catch((err) => {console.log(err);});
