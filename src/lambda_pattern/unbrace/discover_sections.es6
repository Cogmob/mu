(acc, line) => {
    if (!acc) {
        acc = {stack: [], ret: []};}
    //console.log(line.multiline_symbols.closed);
    //console.log(line.multiline_symbols.opened);
    line.multiline_symbols.closed.map(() => acc.stack.shift());
    line.multiline_symbols.opened.map(i => acc.stack.push(i));
    console.log(acc.stack);
    acc.ret.push([line.line, acc.stack]);
    return acc;};
