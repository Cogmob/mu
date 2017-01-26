const updatables = require('../../generated_local/lambda_updatables/_');
const lambda_pattern = require('lambda_pattern');

if (!module.parent) {
    lambda_pattern(updatables, config);}
