i => {
    if (!i.current_diff) return i.format(i.obj);
    if (i.current_diff.kind === 'E') return i.format_funcs.blue(i.obj);}
