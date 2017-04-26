(title, promises) => {
    return .. p.all(.. lo.map(promises, promise => {
        return promise.then(
                i => {return .. p.resolve([false, i]);},
                i => {return .. p.resolve([true, i]);});}))
            .then(results => {
                 const [reject, strings] = .. lo.reduce(
                    results,
                    (acc, result) => {
                        return [
                            acc[0] || result[0],
                            acc[1].concat(result[1])];},
                    [
                        false,
                        [.. bash-color.blue('\n' + title + '\n')]]);
                if (reject) return .. p.reject(strings.join('\n'));
                return .. p.resolve(strings.join('\n'));});};
