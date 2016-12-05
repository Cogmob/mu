const build_dev = require('../build/build_dev');
const modify_tools = require('../lambda/tools.es6').modify_tools;

module.exports = {
    build_dev,
    build_release};

modify_tools(module.exports);
