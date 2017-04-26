() => {
    const steps = ... '[2-4]*'.by_file;
    const expected = .. lo.values(... 'after_data/[1-4]*.yaml'.by_file);
    return .. concat_promises('[module] tests', .. lo.map(
        .. lo.values(steps),
        (promise, index) => {
            return promise(expected[index]).then(
                result => {
                    return .. test_compare(
                        .. lo.keys(steps)[index],
                        expected[index + 1],
                        result);},
                .. reject);}));};
