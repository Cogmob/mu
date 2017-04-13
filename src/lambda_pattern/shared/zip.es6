(key1, arr1, key2, arr2) => {
    var ret = [];
    for (var i = 0; i < arr1.length; i++) {
        var item = {};
        item[key1] = arr1[i];
        item[key2] = arr2[i];
        ret.push(item);};
    return ret;};
