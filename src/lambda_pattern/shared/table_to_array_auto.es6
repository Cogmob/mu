table => {
    return .. lo.values(.. lo.mapValues(table, (val, key) => {
        return {key: key, val: val};}));};
