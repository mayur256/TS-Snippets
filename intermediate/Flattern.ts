/**
 * you would need to write a type that takes an array and emitted the flatten array type.
 * For e.g
 * type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
 */

// type definition
type Flatten<T> = 
    T extends []
    ? []
    : T extends [infer Head, ...infer Tail]
        ? [...Flatten<Head>, ...Flatten<Tail>]
        : [T]
        

// test cases
type A1 = Flatten<[1, 2, 3]>
type B1 = [1, 2, 3]