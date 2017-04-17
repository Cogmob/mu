(test_name, generated, expected) => {
    const diff = . ../diff/_(generated, expected);
    if (!diff) {
        return Promise.resolve(
            .. bash-color.green('test ' + test_name + ' passed'));}

    return Promise.reject(
        .. bash-color.red('test ' + test_name + ' failed'));
        // + console.log(diff);
        };

