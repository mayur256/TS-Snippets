/**
 * Implement a generic First<T> that takes an Array T and returns its first element's type.
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 * type head1 = First<arr1> // expected to be 'a'
 * type head2 = First<arr2> // expected to be 3
 */

type Head<T extends any[]> = T extends [] ? never : T[0];

type arr1 = ['hello', 'there', 'mate'];
const array_1: arr1  = ['hello', 'there', 'mate'];

const firstEl: Head<arr1> = array_1[0];


/**
 * Implement a generic Last<T> that takes an Array T and returns its last element.
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 * type tail1 = Last<arr1> // expected to be 'c'
 * type tail2 = Last<arr2> // expected to be 1
 */

type Tail<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never;

type arr2 = [1, 2, 3];

const array_2: arr2 = [1, 2, 3];

// const lastEl: Tail<arr2> = array_2[array_2.length - 1];