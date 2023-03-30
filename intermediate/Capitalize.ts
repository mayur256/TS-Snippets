/**
 * Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
 * e.g
 * type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
 */

// Type definition
type Capitalize<T extends string> = T extends `${infer Head}${infer Rest}`
    ? `${Uppercase<Head>}${Rest}`
    : T;

// test cases
type A0 = Capitalize<'hello world'> // expected Hello World
type A1 = Capitalize<'f'> // expected F

export { }
