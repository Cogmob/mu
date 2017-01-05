const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const fs = require('fs-extra');
const rsv = require('path').resolve;
const rollup = require('rollup').rollup;
const commonjs = require('rollup-plugin-commonjs');
const node_resolve = require('rollup-plugin-node-resolve');

const build_tools = (root, cb) => {
    rollup({
        entry: rsv(root, 'tools.js'),
        onwarn: (err) => {cb(err);},
        plugins: [
            node_resolve({
                jsnext: true,
                main: true}),
            commonjs({
                include: 'node_modules/**'})]})
    .then(( bundle ) => {
        var result = bundle.generate({
            format: 'cjs'
        });
        fs.writeFileSync(
            rsv(root, 'built_tools.js'),
            '//built\n' + result.code);
        cb();});};

module.exports = build_tools;
