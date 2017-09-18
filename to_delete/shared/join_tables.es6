(tables) => {
    var ret = {};

    tables.forEach((table) => {
        const [new_key, entries] = table;
        .. map_object((val, key) => {
            ret = . set_obj_value(ret, [key, new_key], val);}, entries);});

    return ret;};
