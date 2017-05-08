d => {
    d = d
        .split('\n')
        .map(line => {return {
            line: line,
            multiline_symbols: . find_multiline_opened_and_closed(line)};})
        .map(. clear_line_ends);
    console.log(d);
    return d;};
