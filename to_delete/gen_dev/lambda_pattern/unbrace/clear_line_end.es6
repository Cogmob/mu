// file: unbrace/clear_line_end

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('lodash/fp'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_lodashfp,
    ERR,
        wordwrap) => {
    const _ = (symbols_to_remove,  i) => {
    if  (i.err)  return  i;
    return  module_lodashfp.reduce(
        symbols_to_remove,
        (acc,  symbol) => {
            if  (acc.err) {
                return  acc;}
            const  str  =  acc.line.trim();
            if (symbol  !==  str.slice(-1)) {
                return  {err:  true,  line:  str};}
            return  {err:  false,  line:  str.slice(0,  -1)};},
        i);};

    return _;}).catch((err) => {console.log(err);});
