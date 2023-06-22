/**
 * Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.
 * For example
 * type Test = { id: '1' }
 * type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
 */

// Test cases
type A = {name: 'mayur', age: 30};
type AppendedA = AppendToObject<A, 'isBatman', false> // expected {name: 'mayur', age: 30, isBatman: false}

// Type definition
type AppendToObject<
    T extends Object,
    X extends PropertyKey,
    Y extends any
> = {
    [P in keyof T | X]: P extends keyof T ? T[P] : Y
};

export { }
