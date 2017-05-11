O       i
    store   - i.multiline_symbols.closes
                  - i.multiline_symbols.opened
                  - err: false  line: i.line
            - into . clear_line_end
        into . clear_line_end
    in const res
    if res.err then return (line: i.line  multiline_symbols: [])
    store res.line in i.line
    return i
