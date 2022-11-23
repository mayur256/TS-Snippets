/**
 * Implement an example of built in Awaited utility type
 */

type NumericPromise = Promise<number>;

type Numeric = Awaited<NumericPromise>;

// const number: Numeric = "5"; // throws error type string is not assignable to number

/**
 * Implement a custom type that returns the type wrapped by a Promise
 * e.g return ExampleType from Promise<ExampleType>
 */
type CustomAwaited<T extends Promise<unknown>> = T extends Promise<infer K> ? K : never;

export { };
