/**
 * Implement an example of built in Awaited utility type
 */

type NumericPromise = Promise<number>;

type Numeric = Awaited<NumericPromise>;

// const number: Numeric = "5"; // throws error type string is not assignable to number