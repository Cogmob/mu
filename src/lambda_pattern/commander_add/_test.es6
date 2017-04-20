() => {
    const commander = {
        command: (str) => {
            return {
                description: (description) => {
                    return {
                        action: (func) => {
                            return {
                                call: () => {
                                    const result = func();
                                    if (result === 'result') {
                                        return Promise.resolve();}
                                    return Promise.reject(
                                        '\'' + result
                                        + '\' is not the string'
                                        + ' \'result\'');}}}}}}}};
    return . _(commander, './commander_add/before_data');};
