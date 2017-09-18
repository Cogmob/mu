(root_path)  => {
    return .. read_file(root_path + '/meta/data.yaml', 'utf8')
        .then(metadata => .. yaml.safeLoad(metadata));};
