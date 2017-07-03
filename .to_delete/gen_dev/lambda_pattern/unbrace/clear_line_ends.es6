// file: unbrace/clear_line_ends

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load local
    require('./clear_line_end'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        local_include_clear_line_end,
    ERR,
        wordwrap) => {
    const _ = i => {
    const res = local_include_clear_line_end(
        i.multiline_symbols.closes,
        local_include_clear_line_end(
            i.multiline_symbols.opened,
            {err: false, line: i.line}));
    if (res.err) return {line: i.line, multiline_symbols: []};
    i.line = res.line;
    return i;};

    return _;}).catch((err) => {console.log(err);});
