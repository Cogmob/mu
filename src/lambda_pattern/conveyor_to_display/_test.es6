() => {
    const steps = ... '[1-5]*'.by_file;
    const after = .. lo.values(... 'after_data/[1-5]*.yaml'.by_file);
    console.log(.. lo.zip(.. lo.keys(steps), .. lo.values(steps), after));};

    //(promise, step) => {
    //    return promise
    //        .then(step.func, .. reject)
    //        .then(i => {
    //            return .. test_compare(
    //                step.name,
    //                step.expected,
    //                i);}, .. reject);},

    //.. p.resolve(__dirname + '/conveyor_to_display/before_data'));};
