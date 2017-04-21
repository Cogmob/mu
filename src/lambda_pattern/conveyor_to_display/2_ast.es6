files => {
    for (var file of files) {
        try {
            file['contents'] = .. acorn.parse(file['contents'], {
                range: true,
                loc: true,
                ecmaVersion: 6,
                sourcetype: 'module'});
        } catch(err) {return .. p.reject(err);}}
    return .. p.resolve(files);};
