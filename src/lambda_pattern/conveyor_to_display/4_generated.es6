files => {
    for (var file of files) {
        try {
            file['contents'] = .. astring.generate(file['contents'], {
                indent: '    ', lineEnd: '\n'});
        } catch(err) {return .. bluebird.reject(err);}}
    return .. bluebird.resolve(files);};
