/**
 * Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
 * For e.g
 * type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
 */

type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer X}`
    ? TrimLeft<X>
    : T

// Test Cases
type X1 = TrimLeft<'  mayur'> // Expected type 'mayur'
type X2 = TrimLeft<' mayur  '> // Expected type 'mayur  '

export {}
