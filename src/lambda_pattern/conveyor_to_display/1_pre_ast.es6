path => {
    path = path.replace(/\\/g, '/');
    var paths;
    return .. glob-promise(path + '/**/*.es6')
        .then((filenames) => {
            paths = filenames.map(filename => {
                return filename.replace(path + '/', '');});
            return .. read-files-promise(filenames, 'utf8');}, .. reject)
        .then((files) => {
            files = .. zip('path', paths, 'contents', files);
            return .. p.resolve(files);}, .. reject);};
