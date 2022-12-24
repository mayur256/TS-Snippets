/**
 * Implement the built-in ReturnType<T> generic without using it.
 * for e.g
 * const func = () => void
 * type Result = CustomReturnType<func> // type Result = void
 */

const func = function (): void { }

type CustomReturnType<T extends Function> = T extends (...args: any) => infer X ? X : never;

type Result = CustomReturnType<typeof func>; // type Result = void

export { }
