const ERR = require('async-stacktrace');
const word_wrap = require('word-wrap');
const webpack = require('webpack-stream');
const header = require('gulp-header');
const footer = require('gulp-footer');
const gulp = require('gulp');
const replace = require('gulp-replace');
const sequence = require('gulp-sequence')
const babel = require('gulp-babel');
const del = require('del');
const debug = require('gulp-debug');
const continuation = require('gulp-continuation');

const build_dev = require('build_dev');
