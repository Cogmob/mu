const _ = (code, cb) => {
        var ast = .. acorn.parse(code, {
            range: true,
            loc: true,
            ecmaVersion: 6,
            sourcetype: 'module'});
    return cb(null, ast);};
