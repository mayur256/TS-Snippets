/**
 * Compute the length of a string literal, which behaves like String#length.
 */


// type definition
type StringLength<
    S extends string,
    A extends string[] = []
> = 
    S extends `${infer Head}${infer Tail}`
        ? StringLength<Tail, [...A, Head]>
        : A['length'];    
    

// Test cases
type A0 = StringLength<'Mayur'> // A0=5
type A1 = StringLength<'Clark Kent is superman'> // A1=22

export { }
