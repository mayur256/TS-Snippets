/**
 * Modify the Function prototype to include `defer` method that returns a 
 * wrapper, delaying the function call by ms milliseconds
 */

interface Function {
    defer: (ms: number) => (a: number, b: number) => number
}

// The subject function
function adder(a: number, b: number): void {
    console.log(a+b);
    console.timeEnd("ProtoWrapper");
}

// Prototype ovveriding
Function.prototype.defer = function (ms: number): any {
    const thisFunc = this;
    return function (...args: number[]) {
        setTimeout(() => thisFunc.apply(this, args), ms);
    }
}

// Calling overrided prototype method with native arguments
console.log("Program started");
console.time("ProtoWrapper")
adder.defer(1000)(1, 2);
