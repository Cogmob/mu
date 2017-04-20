() => {
    const ffs = {
        none: i => {return i;},
        red: i => {return '<r>' + i + '</r>';},
        green: i => {return '<g>' + i + '</g>';},
        blue: i => {return '<b>' + i + '</b>';}};

    return .. lo.reduce(
        .. table_to_array_auto(... 'test_data/[0-9].yaml'.by_file),

        (promise, data) => {
            return promise.then(
                .. test_compare(
                    data.key,
                    data.val.diff, 
                    . _(data.val.before, data.val.after, ffs)));},
    
        .. bluebird.resolve());};
