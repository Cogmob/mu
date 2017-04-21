(test_name, expected, generated) => {
    const diff = . ../diff/_(expected, generated);
    if (!diff) return .. p.resolve(
        .. bash-color.green('test ' + test_name + ' passed'));
    return .. p.reject(
        .. bash-color.red('test ' + test_name + ' failed') + '\n\n' + diff);};
