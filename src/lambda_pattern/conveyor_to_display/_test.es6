const _ = () => {
    return .. lo.reduce(
        . ../shared/zip(
            'func', ... '[0-5]*'.by_file,
            'expected', ... 'after_data/[0-5]*.yaml'.by_file);

        (promise, step) => {
            return promise
                .then(step.func)
                .then(i => {
                    const diff = .. diff(step.expected, i);
                    if (diff) return Promise.reject(d);
                    return Promise.resolve(i);});},

        Promise.resolve(__dirname + '/conveyor_to_display/before_data'));};
