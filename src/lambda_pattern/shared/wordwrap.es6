(indent, text) => {
    if (!text) text = 'undefined';
    return .. wordwrap(0, 81)(text).split('\n').map(
        (stack_line) => {return indent + stack_line}).join('\n');};
