/**
 * Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.
 * type arr = ['A', 2, 'B']
 * type popArr = Pop<arr> // ['A', 2]
 */

// Main type definition
type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : never;

type arr = ['A', 2, 'B'];

type result = Pop<arr>; // ['A', 2]

export { }
