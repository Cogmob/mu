const updatables = require('../lambda_updatables/_');
const lambda_pattern = require('lambda_pattern');

if (!module.parent) {
    const config = '[config object]';
    console.log('tool 8888');
    console.log(updatables);
    console.log(lambda_pattern);
    lambda_pattern(updatables, config);}
