/**
 * Implement the built-in Parameters generic without using it.
 * For example:
 * const foo = (arg1: string, arg2: number): void => {}
 * type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
 */

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never;

const randomFunc = (x: string, y: number): void => {

}

type ResultTuple = MyParameters<typeof randomFunc>; // [x: string, y: number]

export { };
