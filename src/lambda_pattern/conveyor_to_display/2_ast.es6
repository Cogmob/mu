const _ = (files, cb) => {
    var ret = [];
    for (let file of files) {
        var transformed = file['contents'];
        transformed = .. espree.parse(file['contents'], {
            range: true,
            loc: true,
            ecmaVersion: 6,
            sourcetype: 'module'});
        transformed = .. babel-core.transformFromAst(transformed, null, {
            //plugins: [.. babel-plugin-transform-es2015-arrow-functions]});
            plugins: []});
        ret.push({
            'path': file['path'],
            'contents': transformed});}
    return cb(null, ret);}
