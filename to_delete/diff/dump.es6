i => {
    i = . dump_set_up(i);
    i.current_diff = . get_current_diff(i.diff, i.path);

    // is i.format_funcs null??
    var ff = i.format_funcs.none;
    if (i.current_diff) {
        const kind = i.current_diff.kind;
        if (kind === 'E') ff = i.format_funcs.blue;
        if (kind === 'N') ff = i.format_funcs.green;
        if (kind === 'D') ff = i.format_funcs.red;}

    if (.. lo.isArray(i.obj)) return ff(. dump_array(i, _));
    if (.. lo.isObject(i.obj)) return ff(. dump_table(i, _));
    return ff(. dump_val(i));};
