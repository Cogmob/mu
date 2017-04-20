(expected, generated, ffs) => {
    if (!ffs) ffs = . get_ffs();
    if (!expected) expected = '';
    if (!generated) generated = '';
    const diff = .. diff(expected, generated);
    if (diff) return 'expected:\n'
        + .. wordwrap('',
            . dump({diff: diff, obj: expected, format_funcs: ffs}))
        + '\ngenerated:\n'
        + .. wordwrap('',
            . dump({diff: diff, obj: generated, format_funcs: ffs})) + '\n';}
