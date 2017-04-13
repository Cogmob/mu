i => {
    if (!('format' in i)) i.format = a => {return a};

    i.current_diff = .. lo.reduce(i.diff,
        (acc, val) => {
            if (!('path' in val) || val.path.length == 0) return val;
            return acc;}, null);

    if (.. lo.isArray(i.obj)) {
        return . dump_array(i)}

    return . dump_val(i);};
