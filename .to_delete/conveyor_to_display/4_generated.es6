files => {
    const ret = [];
    for (var file of files) {
        try {
            ret.push({
                path: file['path'],
                contents: .. astring.generate(file['contents'], {
                    indent: '    ', lineEnd: '\n'})});
        } catch(err) {return .. p.reject(err);}}
    return .. p.resolve(ret);};
