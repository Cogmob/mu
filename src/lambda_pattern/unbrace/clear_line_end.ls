symbols_to_remove   i =>
    if    i.err
        i > return

        symbols_to_remove
        acc    symbol =>
            if    acc.err
                return acc
            acc.line.trim. > const str
            -1 > str.slice. > const last_symbol 
            if symbol !== last_symbol
                return err: true    line: str
            return
                err: false
                line: 0   -1 > str.slice.
        i
    >
            .. lo.reduce. > return
