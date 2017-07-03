() => {
    const steps = ... '[1-5]*'.by_file;
    const expected = .. lo.values(... 'after_data/[0-5]*.yaml'.by_file);
    return .. concat_promises('[module] tests', .. lo.map(
        .. lo.values(steps),
        (promise, index) => {
            return promise(expected[index]).then(
                result => {
                    const ret = .. test_compare(
                        .. lo.keys(steps)[index],
                        expected[index + 1],
                        result);
                    return ret;},
                .. reject);}));};
