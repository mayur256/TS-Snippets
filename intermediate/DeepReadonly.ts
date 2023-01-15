/**
 * Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
*/

type DeepReadonly<T> = {
    readonly [K in keyof T]: K extends Object ? DeepReadonly<T[K]> : T[K];
};