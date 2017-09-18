files => {
    const ret = [];
    for (var file of files) {
        try {
            ret.push({
                path: file['path'],
                contents: .. acorn.parse(file['contents'], {
                    range: true,
                    loc: true,
                    ecmaVersion: 6,
                    sourcetype: 'module'})});
        } catch(err) {return .. p.reject(err);}}
    return .. p.resolve(ret);};
