() => {

    return .. lo.reduce(
        . ../shared/table_to_array('name', . ../shared/join_tables([[
            'func', ... '[0-5]*'.by_file], [
            'expected', ... 'after_data/[0-5]*.yaml'.by_file]])),

        (promise, step) => {
            return promise
                .then(step.func)
                .then(i => {
                    const diff = . ../diff/_(step.expected, i);
                    if (diff) {
                        return Promise.reject(diff);}
                    return Promise.resolve(i);});},

        Promise.resolve(__dirname + '/conveyor_to_display/before_data'));};
