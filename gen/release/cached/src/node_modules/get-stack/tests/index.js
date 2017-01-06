var test = require('tape'),
    getStack = require('../'),
    path = require('path');

test('getStack Exists', function (t) {
    t.plan(2);
    t.ok(getStack, 'getStack Exists');
    t.equal(typeof getStack, 'function', 'getStack is an function');
});

test('getStack defaults', function getStackDefaults(t) {
    t.plan(1);

    t.equal(getStack(), 'Test.getStackDefaults (/home/maurice/dev/get-stack/tests/index.js:14:13)', 'get correct stack info');
});

test('getStack different level', function (t) {
    t.plan(1);

    function myCoolFunction(){
        t.equal(getStack(1), 'myOtherCoolFunction (/home/maurice/dev/get-stack/tests/index.js:25:9)', 'get correct stack info');
    }

    function myOtherCoolFunction(){
        myCoolFunction();
    }

    myOtherCoolFunction();
});

test('getStack out of range level', function (t) {
    t.plan(1);

    t.equal(getStack(99999999), 'stack level 99999999 out of range.', 'corectly errored out of range');
});