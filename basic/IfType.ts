/**
 * Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F.
 * C is expected to be either true or false while T and F can be any type.
 * e.g
 * type A = If<true, 'a', 'b'>  // expected to be 'a'
 * type B = If<false, 'a', 'b'> // expected to be 'b'
 */

type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, 'a', 'b'>; // expected type A = 'a'
export default {};
