(i, dump) => {
    const path = i.path;
    const table = i.obj;
    var current_diff_i = null;
    if (i.current_diff) current_diff_i = i.current_diff.index;
    i.current_diff = null;
    var ret = .. lo.values(.. lo.mapValues(i.obj, (val, key) => {
            i.path = .. lo.clone(path);
            i.path.push(key);
            i.obj = table[key];
            var item_str = dump(i);
            return key + ': ' + item_str.replace(/\n/g, '\n  ');}))
        .join('\n');
    return ret;}
