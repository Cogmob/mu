line => {
    return .. lo.reduce(
        line,
        (acc, symbol) => {
            if (!'(){}[]'.includes(symbol)) return acc;
            if ('({['.includes(symbol)) {
                acc.opened.unshift(symbol);
                return acc;}
            if (
                    (acc.opened[0] === '(' && symbol === ')')
                    || (acc.opened[0] === '{' && symbol === '}')
                    || (acc.opened[0] === '[' && symbol === ']')) {
                acc.opened.shift();
                return acc;}
            acc.closed.push(symbol);
            return acc;},
        {opened: [], closed: []});};
