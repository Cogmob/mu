d => {
    d = d
        .split('\n')
        .map(line => {return {
            line: line,
            multiline_symbols: . find_multiline_opened_and_closed(line)};})
        .map(. clear_line_ends)
        .reduce(. discover_sections, null);
    .. lo.map(d, i => console.log(i));
    return d;};
