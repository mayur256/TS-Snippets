/** 
 * All built in objects like Array, Date, or Function inherit some properties or methods
 * from their prototype. 
 */

/**
 * Modify the Function prototype to include method defer(ms) that runs the function
 * after ms milliseconds.
 */

// At runtime this interface will merge with buit-in Function interface
interface Function {
    defer: (ms: number) => void;
}

Function.prototype.defer = function (ms: number): void {
    setTimeout(this, ms);
}

function callable() {
    console.log(`Callable called!`);
}

console.log("Program started");
callable.defer(1000);