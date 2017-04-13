(test_name, generated, expected) => {
    if (expected != generated &&
            expected.replace(/\s/g, '') != generated.replace(/\s/g, '')) {
        console.log(
            .. bash-color.red('test ' + test_name + ' failed')
            + '\n    generated:\n'
            + . ../shared/wordwrap('        ', generated)
            + '\n    expected:\n'
            + . ../shared/wordwrap('        ', expected)
            + '\n');
        return;}
    console.log(.. bash-color.green('test ' + test_name + ' passed'));};

