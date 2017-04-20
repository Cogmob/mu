i => {
    if (!('format_funcs' in i)) i.format_funcs = {
        none: i => {return i},
        red: .. bash-color.blue,
        green: .. bash-color.green,
        blue: i => {
            return .. chalk.styles.bold.open
                + i + .. chalk.styles.bold.close;}};

    if (!i.expected) i.expected = '';
    if (!i.generated) i.generated = '';
    if (!('format' in i)) i.format = a => {return a};
    if (!('path' in i)) i.path = [];

    return i;};
