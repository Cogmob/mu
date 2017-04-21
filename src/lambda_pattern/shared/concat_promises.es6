(title, promises) => {
    return .. p.all(promises).then(results => {
        return .. p.resolve(
            .. bash-color.blue('\n'+title+'\n') + results.join('\n'));});};
