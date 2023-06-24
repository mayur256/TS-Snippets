/**
 * Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string.
 * For example
 * type Test = -100;
 * type Result = Absolute<Test>; // expected to be "100"
 */

// Test cases
type A = -50
type A1 = Absolute<A> // expected to be "50"

type B = "-40"
type B1 = Absolute<B> // expected to be "40"

type C = 500
type C1 = Absolute<C> // expected to be "500"

type Absolute<
    T extends string | number | bigint
> = T extends `-${infer N}` ? N : `${T}`;

export { }
