i => {
    const res = . clear_line_end(
        i.multiline_symbols.closes,
        . clear_line_end(
            i.multiline_symbols.opened,
            {err: false, line: i.line}));
    if (res.err) return {line: i.line, multiline_symbols: []};
    i.line = res.line;
    return i;};
