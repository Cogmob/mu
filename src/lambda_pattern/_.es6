const commander = require('commander');

const _ = (updatables, config) => {
    console.log('mu');
    console.log(updatables);
    console.log(config);
    updatables(commander, __dirname, config);}
