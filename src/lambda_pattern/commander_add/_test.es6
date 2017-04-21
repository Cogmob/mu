() => {
    console.log(.. bash-color.blue('\n[module] test\n'));
    const commander = {
        command: (str) => {
            return {
                description: (description) => {
                    return {
                        action: (func) => {
                            return {
                                call: () => {
                                    return .. test_compare('result', func());
    }}}}}}}};
    return . _(commander, './commander_add/before_data');};
