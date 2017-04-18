() => {
    return .. lo.reduce(
        .. table_to_array('name', .. join_tables([[
            'func', ... '[0-5]*'.by_file], [
            'expected', ... 'after_data/[0-5]*.yaml'.by_file]])),

        (promise, step) => {
            return promise
                .then(step.func, .. reject)
                .then(i => {
                    console.log('running ' + step.name);
                    return .. test_compare(
                        step.name,
                        step.expected,
                        i);}, .. reject);},

        .. bluebird.resolve(__dirname + '/conveyor_to_display/before_data'));};
