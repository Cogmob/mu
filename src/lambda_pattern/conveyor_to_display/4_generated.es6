files => {
    for (var file of files) {
        try {
            file['contents'] = .. astring.generate(file['contents'], {
                indent: '    ', lineEnd: '\n'});
        } catch(err) {return .. p.reject(err);}}
    console.log(files);
    return .. p.resolve(files);};
