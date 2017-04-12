const _ = (files) => {
    for (var file of files) {
        try {
            file['contents'] = .. acorn.parse(file['contents'], {
                range: true,
                loc: true,
                ecmaVersion: 6,
                sourcetype: 'module'});
        } catch(err) {
            console.log('error:');
            console.log('path');
            console.log(file['path']);
            console.log('contents');
            console.log(file['contents']);
            console.log(err);
            return Promise.reject(err);}}
    return Promise.resolve(files);};
