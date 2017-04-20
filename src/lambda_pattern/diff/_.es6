(expected, generated, ffs) => {
    const diff = .. diff(expected, generated);
    if (diff) return 'expected:\n'
        + .. wordwrap('',
            . dump({diff: diff, obj: expected, format_funcs: ffs}))
        + '\ngenerated:\n'
        + .. wordwrap('',
            . dump({diff: diff, obj: generated, format_funcs: ffs})) + '\n';}
