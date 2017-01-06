const build_dev = require('./build_dev'); // copied from updatables directory
const modify_tools = require('../modify_tools/modify.es6').modify_tools; // moved from project folder

module.exports = {
    build_dev,
    build_release};

modify_tools(module.exports);
