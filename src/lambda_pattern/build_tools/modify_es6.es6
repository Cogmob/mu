const _ = (root_path, cb) => {
    var data = .. vinyl_fs.src([
                '/**' + '/*.es6',
                '!*' + '*/expected/**',
                '!**' + '/node_modules/**',
                '!**' + '/*_data/**' + '/*'],
            {root: root_path})
        .pipe(.. through2.obj((file, enc, cb2) => {
            var contents = file.contents.toString();
            contents = `
const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');` + "\n" + contents;
            contents = contents.replace(
                /\[project\_name\]/g,
                'lambda_pattern')
            .replace(
                /cont\(.*err.*\).*;/g,
                `$&
                if (ERR(err, cb)) {
                    return;}
                    `)
            .replace(
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
            `);
            file.contents = new Buffer(contents);
            cb2();}))
        //.pipe(process.stdout)
        .pipe(.. vinyl_fs.dest(root_path))
        .on('finish', () => cb());
        //.catch(err => cb(err));
    //.. gulp.task('a', ()=>{
    //    return .. gulp.src([
    //            root_path + '/**' + '/*.es6',
    //            '!*' + '*/expected/**',
    //            '!**' + '/node_modules/**',
    //            '!**' + '/*_data/**' + '/*'])
    //        .pipe(.. gulp_insert.prepend(
    //            'const word_wrap = require(\'word-wrap\');\n'))
    //        .pipe(gulp_insert.prepend(
    //            'const ERR = require(\'async-stacktrace\');\n'))
    //        .pipe(gulp_replace(/\[project\_name\]/g, 'lambda_pattern'))
    //        .pipe(gulp_replace(
    //            /cont\(.*err.*\).*;/g,
    //            `$&
    //            if (ERR(err, cb)) {
    //                return;}
    //                `))
    //        .pipe(gulp_replace(
    //            /const cb = \(err.*\) \=> \{/g,
    //            `$&
    //        if (err) {
    //            console.log(word_wrap(err.stack.replace(/\\\\/g, '\\\\ '), {
    //                trim: true,
    //                width: 80})
    //            .split('\\n').forEach((stack_line) => {
    //                console.log(stack_line
    //                    .replace(/\\\\ /g, '\\\\')
    //                    .replace(/ at/g, '\\nat')
    //                    .replace(/Error:/g, '\\nError:'));}));
    //            t.fail();
    //            return t.end();}
    //        `)) 
    //        .pipe(gulp.dest(root_path))
    //        .on('end', cb)
    //        .on('error', cb);});

    //    gulp.start('a');
};
