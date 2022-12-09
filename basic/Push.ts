/**
 * Implement the JavaScript Array.push function in the type system. A type takes the two arguments.
 * e.g
 * type Result = Push<[1, 2], '3'> // expected [1, 2, '3']
 */

type Push<T extends any[], X> = [...T, X];

type Result = Push<[1, 2], '3'>;

// const result: Result = [1, 2, 3]; // throws error Type 'number' is not assignable to type '"3"'
export {}