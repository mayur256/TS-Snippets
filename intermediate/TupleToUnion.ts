/**
 * Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
 * e.g
 * type Arr = ['1', '2', '3']
 * type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
 */

type TupleToUnion<T extends Array<any>> = T[number];

type Tuple = ['A', 'a'];

type Union = TupleToUnion<Tuple>; // 'A' | 'a'
