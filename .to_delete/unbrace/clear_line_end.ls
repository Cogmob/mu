O       symbols_to_remove,  i
    if i.err,  return i
    return  symbols_to_remove
            O       acc,  symbol
                if acc.err,  return acc
                acc.line.trim.    store in str
                str.slice     -1,  store in last_symbol 
                if  symbol  is not equal to  last_symbol
                    return  err:  true  line:  str
                return  err:  false  line:  (str.slice    0  -1)
            i
        into  .. lo.reduce

symbols_to_remove,  i =>
    if i.err,  return i
    return  .. lo.reduce.
        symbols_to_remove
        acc,  symbol =>
            if acc.err,  return acc
            const str  =  acc.line.trim.
            if symbol  !==  str.slice.  -1
                return  err:  true,  line:  str
            return  err:  false,  line:  str.slice.  0,  -1
        i
