(...promises)  => {
    console.log(promises);
    return  .. lo.reduce((acc,  promise)  =>  acc.then(promise),  promises);};
