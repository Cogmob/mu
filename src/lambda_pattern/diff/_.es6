(expected, generated, ffs) => {
    if (!ffs) ffs = . get_ffs();
    const diff = .. diff(expected, generated);
    if (diff) return 'expected:\n'
        + .. wordwrap('',
            . dump({diff: diff, obj: expected, lhs: true, format_funcs: ffs}))
        + '\ngenerated:\n'
        + .. wordwrap('',
            . dump({diff: diff, obj: generated, lhs: false, format_funcs: ffs}));}
