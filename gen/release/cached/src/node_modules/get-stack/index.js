module.exports = function (level){
    var orig = Error.prepareStackTrace,
        error = new Error(),
        stack;

    Error.prepareStackTrace = function(){return arguments[1];};
    Error.captureStackTrace(error, arguments.callee);

    stack = error.stack[level || 0];

    Error.prepareStackTrace = orig;

    if(!stack){
        return 'stack level ' + level + ' out of range.';
    }

    return stack.toString();
};
