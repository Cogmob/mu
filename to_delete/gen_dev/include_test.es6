const fs = require('fs-extra');
const tools = require('./tools');

const out = (a, b) => {
    console.log(a);
    console.log(b);}

module.exports = out;

out(1,2);
