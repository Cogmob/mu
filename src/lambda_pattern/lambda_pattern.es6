const create = require('./create');

const lambda_pattern = (cb) => {
    const command = process.argv[0];

    if (command === 'create') {
        return create(cb);}
    
    cb('help text ...');
};

module.exports = lambda_pattern;
