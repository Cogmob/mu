(key_name, table) => {
    return .. lo.values(.. lo.mapValues(table, (val, key) => {
        val[key_name] = key;
        return val;}));}
