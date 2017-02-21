const _ = (cb) => {
    const commander = {
        command: (str) => {
            return {
                description: (description) => {
                    return {
                        action: (func) => {
                            return {
                                call: (cb) => {
                                    const result = func();
                                    if (result !== 'result') {
                                        return cb(
                                            result
                                            + ' + is not the string'
                                            + '\'result\'');}
                                    cb();}}}}}}}};
    . _(
        commander,
        '../..',
        __dirname.replace('\\', '/') + '/before_data',
        cont(err));
    cb()};
