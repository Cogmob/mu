line => {
    return .. lo.reduce(
        line,
        (ret, symbol) => {
            if (!'(){}[]'.includes(symbol)) return ret;
            if ('({['.includes(symbol)) {
                ret.opened.unshift(symbol);
                return ret;}
            if (
                    (ret.opened[0] === '(' && symbol === ')')
                    || (ret.opened[0] === '{' && symbol === '}')
                    || (ret.opened[0] === '[' && symbol === ']')) {
                ret.opened.shift();
                return ret;}
            ret.closed.push(symbol);
            return ret;},
        {opened: [], closed: []});};
