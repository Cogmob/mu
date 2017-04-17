(diff, path) => {
    return .. lo.reduce(
        diff,
        (acc, val) => {
            if (acc) return acc;
            if (!('path' in val)) return val;
            if (.. lo.isEqual(val.path, path)) return val;},
        null)};
