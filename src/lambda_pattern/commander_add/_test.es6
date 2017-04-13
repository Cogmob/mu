(cb) => {
    const commander = {
        command: (str) => {
            return {
                description: (description) => {
                    return {
                        action: (func) => {
                            return {
                                call: () => {
                                    const result = func();
                                    if (result !== 'result') {
                                        return cb(
                                            '\'' + result
                                            + '\' is not the string'
                                            + ' \'result\'');}}}}}}}}};
    . _(
        commander,
        './commander_add/before_data',
        cont(err));};
