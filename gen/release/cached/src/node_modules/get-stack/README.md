#get-stack

Get stack info for a position in code.

## Usage

    1.   // dev/my-cool-module/foo.js
    2.   var getStack = require('get-stack');
    3.
    4.   function myCoolFunction(){
    5.       console.log(getStack());  // myCoolFunction (dev/my-cool-module/foo.js:8)
    6.   }
    7.
    8.   myCoolFunction();

## Stack Levels

Info on different stack level can be obtained by passing a level to getStack()

    getStack(1) // 1 level deep
    getStack(4) // 4 levels deep