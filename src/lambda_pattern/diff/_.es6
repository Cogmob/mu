(a, b, ffs) => {
    if (!ffs) ffs = . get_ffs();
    const diff = .. diff(a, b);
    if (diff) return 'lhs:\n'
        + . ../shared/wordwrap(
            '.   ',
            . dump({diff: diff, obj: a, lhs: true, format_funcs: ffs}))
        + '\nrhs:\n'
        + . ../shared/wordwrap(
            '.   ',
            . dump({diff: diff, obj: b, lhs: false, format_funcs: ffs}));}
