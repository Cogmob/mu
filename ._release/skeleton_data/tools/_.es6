const updatables = require('../lambda_updatables/_');
const lambda_pattern = require('lambda_pattern');

if (!module.parent) {
    const config = '[config object]';
    lambda_pattern(updatables, config);}
