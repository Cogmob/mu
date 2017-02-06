const _ = (from, to, cb) => {
    const handle_response = () => {
        cb();};

    .. move_path(from, to, handle_response);};
