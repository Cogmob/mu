const ensure_git_exists = require('./ensure_git_exists');

const _ = (mu_src_path) => {
    ensure_git_exists(mu_src_path);};

module.exports = _;
