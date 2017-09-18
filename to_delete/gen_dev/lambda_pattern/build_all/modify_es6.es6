// file: build_all/modify_es6

const jspm = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
    const q = eval('require')(
        process.env['HOME'] + '/.jspm_global_packages/node_modules/q/q.js');
    jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
    const promises = [
        // load jspm
    jspm.import('gulp'),
    // other
        jspm.import('async-stacktrace'),
        jspm.import('wordwrap')];
    module.exports = q.all(promises).spread((
        module_gulp,
    ERR,
        wordwrap) => {
    const _ = (root_path, cb) => {
    module_gulp.task('_', ()=>{
        return module_gulp.src([
                root_path + '/**/*.es6',
                '!**/expected/**',
                '!**/node_modules/**',
                '!**/*_data/**/*'])
            .pipe(insert.prepend('const word_wrap = require(\'word-wrap\');\n'))
            .pipe(insert.prepend('const ERR = require(\'async-stacktrace\');\n'))
            .pipe(replace(/\[project\_name\]/g, 'lambda_pattern'))
            .pipe(replace(
                /cont\(.*err.*\).*;/g,
                `$&
                if (ERR(err, cb)) {
                    return;}
                    `))
            .pipe(replace(
                /const cb = \(err.*\) \=> \{/g,
                `$&
            if (err) {
                console.log(word_wrap(err.stack.replace(/\\\\/g, '\\\\ '), {
                    trim: true,
                    width: 80})
                .split('\\n').forEach((stack_line) => {
                    console.log(stack_line
                        .replace(/\\\\ /g, '\\\\')
                        .replace(/ at/g, '\\nat')
                        .replace(/Error:/g, '\\nError:'));}));
                t.fail();
                return t.end();}
            `)) 
            .pipe(module_gulp.dest(root_path))
            .on('end', cb)
            .on('error', cb);});

        module_gulp.start('_');};

    return _;}).catch((err) => {console.log(err);});
