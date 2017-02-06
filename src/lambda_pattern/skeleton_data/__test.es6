++tape('[[project_name]]', t => {
    const cb = (err, generated, expected) => {
        t.deepEqual(generated, expected);
        t.end();}

    cb(null, 1, 2);});
