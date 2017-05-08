i =>
        i.multiline_symbols.closes
            i.multiline_symbols.opened
            err: false    line: i.line
        > . clear_line_end.
    > . clear_line_end. > const res
        line: i.line    multiline_symbols: [] > return
    if   res.err
    res.line > i.line
    i > return
