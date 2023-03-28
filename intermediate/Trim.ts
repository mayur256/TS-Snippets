/**
 * Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
 * e.g
 * type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
 */

type WhiteSpace = `${' ' | '\n' | '\t' | '\r'}`
type Trim<T extends string> = T extends `${WhiteSpace}${infer X}${WhiteSpace}`
    ? Trim<X>
    : T

// Test cases
type Trimmed = Trim<'  Hello World  '>

export {}
