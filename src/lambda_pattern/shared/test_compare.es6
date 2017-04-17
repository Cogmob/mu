(test_name, generated, expected) => {
    if (!generated) generated = '';
    if (!expected) expected = '';
    if (expected.replace(/\ |\n/g, '') != generated.replace(/\ |\n/g, '')) {
        console.log(
            .. bash-color.red('test ' + test_name + ' failed')
            + '\n    generated:\n'
            + . ../shared/wordwrap('        ', generated)
            + '\n    expected:\n'
            + . ../shared/wordwrap('        ', expected)
            + '\n');
        return;}
    console.log(.. bash-color.green('test ' + test_name + ' passed'));};

