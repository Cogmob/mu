const fs = require('fs-extra');
const move_if_exists = require('../shared/move_if_exists');
const ensure_dir = fs.mkdirp;
const prepend_file = require('prepend-file');

const _ = (root_path, updatables_version, cb) => {
    ensure_dir(
        root_path + '/generated/tools/stored',
        cont(err));

    move_if_exists(
        root_path + '/generated/tools/_.js',
        root_path + '/generated/tools/stored/' + updatables_version + '.js',
        cont(err));

    prepend_file(
        root_path + '/generated_local/tools/__built.js',
        '#!/usr/bin/env node\n\n',
        cont(err));

    fs.move(
        root_path + '/generated_local/tools/__built.js',
        root_path + '/generated/tools/_.js',
        cb);}
