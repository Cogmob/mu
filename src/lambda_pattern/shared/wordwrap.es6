(indent, text) => {
    if (!text) text = 'undefined';
    return .. wrdwrap(0, 81)(text.split('\n').join('\n.   ')).split('\n').map(
        (stack_line) => {return indent + stack_line}).join('\n');};
