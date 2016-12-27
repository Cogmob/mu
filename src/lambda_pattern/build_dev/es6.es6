const gulp = require('gulp');
const debug = require('gulp-debug');
const insert = require('gulp-insert');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const continuation = require('gulp-continuation');

const es6 = (root_path, project_name, cb) => {
    gulp.task('a', ()=>{
        return gulp.src([
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
            .pipe(gulp.dest(root_path))
            .pipe(babel({ presets: ['es2015'] }))
            .pipe(continuation())
            .pipe(gulp.dest(root_path))
            .on('end', cb)
            .on('error', cb);});

        gulp.start('a');};

module.exports = es6;
