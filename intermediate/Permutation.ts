/**
 * Implement permutation type that transforms union types into the array that includes permutations of unions.
 * type perm = Permutation<'A' | 'B' | 'C'>; 
 * // ['A', 'B', 'C'] |
 * ['A', 'C', 'B'] | 
 * ['B', 'A', 'C'] | 
 * ['B', 'C', 'A'] | 
 * ['C', 'A', 'B'] | 
 * ['C', 'B', 'A']
 */

// Type definition
type Permutation<T, Acc = T> = 
    [T] extends [never]
    ? []
    : Acc extends T 
        ? [Acc, Permutation<Exclude<T, Acc>>]
        : []

// test cases
type A = Permutation<'A'>