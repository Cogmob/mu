(i, dump) => {
    const arr = i.obj;
    const path = i.path;
    var current_diff_i = null;
    if (i.current_diff) current_diff_i = i.current_diff.index;
    i.current_diff = null;
    return .. lo.times(arr.length, n => {
            i.path = .. lo.clone(path)
            i.path.push(n);
            i.obj = arr[n];
            var item_str = dump(i);
            if (n === current_diff_i) {
                item_str = i.format_funcs.blue(item_str);
            }
            return '- ' + item_str.replace(/\n/g, '\n  ');})
        .join('\n');}
