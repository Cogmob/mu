i => {
    .. colors;
    if (!('format' in i)) i.format = a => {return a};

    const current_diff = .. lo.reduce( i.diff,
        (acc, val) => {
            if (val.path.length == 0) return val;
            return acc;}, null);

    if (.. lo.isArray(i.o)) {
        return . dump_array(i)}

    return .. bash-color.red('red');}
