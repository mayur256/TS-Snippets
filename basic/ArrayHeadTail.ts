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