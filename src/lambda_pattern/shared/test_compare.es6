(test_name, expected, generated) => {
    const diff = . ../diff/_(expected, generated);
    if (!diff) {
        console.log(.. bash-color.green('test ' + test_name + ' passed'));
        return .. bluebird.resolve(generated);}

    console.log(.. bash-color.red('test ' + test_name + ' failed'));
    return .. bluebird.reject(
        .. bash-color.red('test ' + test_name + ' failed') + diff);};

