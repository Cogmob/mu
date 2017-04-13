const _ = (files) => {
    for (var file of files) {
        try {
            file['contents'] = .. astring.generate(file['contents'], {
                indent: '    ', lineEnd: '\n'});
        } catch(err) {
            console.log('error:');
            console.log(err);
            console.log('path:');
            console.log(file['path']);
            console.log('contents:');
            console.log(file['contents']);
            return Promise.reject(err);}}
    return Promise.resolve(files);};
