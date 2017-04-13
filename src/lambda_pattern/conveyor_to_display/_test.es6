const _ = () => {
    const steps = . ../shared/zip(
        'func', ... '[0-5]*'.by_file,
        'expected', ... 'after_data/[0-5]*.yaml'.by_file);

    return .. lo.reduce(
        steps,

        (promise, step) => {
            return promise
                .then(step.func)
                .then(actual => {
                        const d = .. diff(step.expected, actual);
                        if (d) {
                            console.log('actual does not match expectation:');
                            console.log(
                                .. yaml_write(JSON.parse(JSON.stringify(d))));
                            return Promise.reject();}
                        return Promise.resolve(actual);});},

        Promise.resolve(__dirname + '/conveyor_to_display/before_data'));};
