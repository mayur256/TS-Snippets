/**
 * Implement the JavaScript Array.unshift function in the type system. A type takes the two arguments.
 * e.g
 * type Result = Unshift<[1, 2], '3'> // expected ['3', 1, 2]
 */

type Unshift<T extends any[], X> = [X, ...T];

type Result = Unshift<[1, 2], '3'>;

// const result: Result = [1, 2, 3]; // throws error Type '2' is not assignable to type '1'
export { }
