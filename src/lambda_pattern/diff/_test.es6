() => {
    .. lo.forEach(
        . ../shared/table_to_array_auto(... 'test_data/[0-9].yaml'.by_file),
        (data) => {
            const diff = . _(data.val.before, data.val.after, {
                red: i => {return '<r>' + i + '</r>';},
                green: i => {return '<g>' + i + '</g>';},
                blue: i => {return '<b>' + i + '</b>';}});
            . ../shared/test_compare(data.key, diff, data.val.diff);
        });
    return Promise.resolve();};
