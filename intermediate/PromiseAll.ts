/**
 * Type the function PromiseAll that accepts an array of PromiseLike objects,
 * the returning value should be Promise<T> where T is the resolved result array.
 * e.g
 * const promise1 = Promise.resolve(3);
 * const promise2 = 42;
 * const promise3 = new Promise<string>((resolve, reject) => {
 * setTimeout(resolve, 100, 'foo');
 * });
 * expected to be `Promise<[number, 42, string]>`
 * const p = PromiseAll([promise1, promise2, promise3] as const)
 */
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T

declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<
    { [K in keyof T]: MyAwaited<T[K]> }
>

const promise1 = Promise.resolve(3);
const promise2 = 42;

const result = PromiseAll([promise1, promise2] as const);
export { }
