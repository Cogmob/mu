() => {
    //return {
    //    none: i => {return i},
    //    red: .. bash-color.blue,
    //    green: .. bash-color.green,
    //    blue: .. bash-color.blue};};
    return {
        red: i => {return '<r>' + i + '</r>';},
        green: i => {return '<g>' + i + '</g>';},
        none: i => {return i;},
        blue: i => {return '<b>' + i + '</b>';}};};
