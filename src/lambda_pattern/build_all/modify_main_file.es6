const _ = (root_path, cb) => {
    .. read_file(root_path + '/_.es6', cont(err, main_file));
    main_file = main_file + `
        if (!module.parent) {
            lambda_pattern(function (er) {
                if (er) {
                   console.log(er.toString());
                }
            });
        }`
    .. write_file(root_path + '/_.es6', main_file, cb);};
