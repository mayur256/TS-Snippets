/**
 * Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
 * e.g
 * type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
 */
// Type definition
type ReplaceAll <T extends string, From extends string, To extends string> = 
    From extends ''
    ? T
    : T extends `${infer R1}${From}${infer R2}`
        ? `${R1}${To}${ReplaceAll<R2, From, To>}`
        : T

// Test Case
type A0 = ReplaceAll<'t y p e s', ' ', ''>

export {}

