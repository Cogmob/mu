// file: build/webpack

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('webpack'),
    jspm.import('webpack-node-externals@^1.5.4'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_webpack,
    module_webpacknodeexternals154,
    ERR,
        wordwrap) => {
    const _ = (root_path, entry, output, cb) => {
    console.log(root_path);
    const compiler = module_webpack({
        entry: entry,
        context: root_path,
        externals: [module_webpacknodeexternals154()],
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'shebang'}, {
                test: /\.es6$/,
                loader: 'es6-loader'}]},
        node: {
            __filename: true,
            __dirname: true},
        output: {filename: output, path: root_path},
        target: 'node'}, cont(err, stats));
                if (ERR(err, cb)) {
                    return;}
                    
    cb();};
 

    return _;}).catch((err) => {console.log(err);});
