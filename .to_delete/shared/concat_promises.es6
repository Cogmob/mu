(title, promises) => {
    return .. p.all(.. lo.map(promises, promise => {
        return promise.then(
                i => {return .. p.resolve([false, i]);},
                i => {return .. p.resolve([true, i]);});}))
                B
            .then(results => {
                console.log(1234);
                const [reject, strings] = .. lo.reduce(
                    (acc, result) => {
                        return [
                            acc[0] || result[0],
                            acc[1].concat(result[1])];},
                    results,
                    [
                        false,
                        [.. bash-color.blue('\n' + title + '\n')]]);
                console.log('5678');
                if (reject) return .. p.reject(strings.join('\n'));
                return .. p.resolve(strings.join('\n'));});};
