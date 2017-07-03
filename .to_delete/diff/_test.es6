() => {
    const ffs = {
        none: i => {return i;},
        red: i => {return '<r>' + i + '</r>';},
        green: i => {return '<g>' + i + '</g>';},
        blue: i => {return '<b>' + i + '</b>';}};

    return .. concat_promises('[module] test',
        .. lo.map(
            .. lo.toPairs(... 'test_data/[0-9].yaml'.by_file),

            data => {
                    return .. test_compare(
                        data[0],
                        data[1].diff, 
                        . _(data[1].before, data[1].after, ffs));}));};
