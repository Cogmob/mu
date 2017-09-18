var jspm, q, promises;
'use strict';
jspm = eval('require')(process.env['HOME'] + '/.jspm_global_packages/node_modules/jspm/api.js');
jspm.setPackagePath(process.env['HOME'] + '/.jspm_global_packages');
var builder = new jspm.Builder;
({
    baseURL: '/' + __dirname + '/../../..',
    map: {}});
builder.bundle(
    '/' + __dirname + '/../updatables/test.js',
    'updatables.js',
    {minify: false});
