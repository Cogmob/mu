const _ = (path, cb) => {
    const handle_response = () => {
        cb();};

    .. remove_path(path, handle_response);};
