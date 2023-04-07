/**
 * For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type wink)
 * create a generic type which will take Fn as the first argument, A as the second,
 * and will produce function type G which will be the same as Fn but with appended argument A as a last one.
 * e.g
 * type Fn = (a: number, b: string) => number
 * type Result = AppendArgument<Fn, boolean> 
 * expected be (a: number, b: string, x: boolean) => number
 */

// Type definitions
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never

// Test cases
type Fn = (a: number, b: string) => number
type Result = AppendArgument<Fn, boolean> 

export {}
