const _ = (obj, keys, val) => {
    var curr_obj = obj;
    const last_key = keys.pop();

    for (var key of keys) {
        if (!(key in curr_obj)) curr_obj[key] = {};
        curr_obj = curr_obj[key];}

    curr_obj[last_key] = val;

    return obj;};
