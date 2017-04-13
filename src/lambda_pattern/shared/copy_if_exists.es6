(from, to, cb) => {
    const handle_response = () => {
        cb();};

    .. fs.copy(from, to, handle_response);};
