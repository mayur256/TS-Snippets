/**
 * Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
*/

type DeepReadonly<T> = {
    readonly [K in keyof T]: K extends Object ? DeepReadonly<T[K]> : T[K];
};

type nestedObjType = {
    name: {
        first: 'Mayur'
        last: 'Upadhayay'
    },
    age: 26
};

type nestedObjReadonly = DeepReadonly<nestedObjType>;

const person: nestedObjReadonly = {
    name: {
        first: 'Mayur',
        last: 'Upadhayay'
    },
    age: 26
};

person.age = 28 // This line throws an error - Cannot assign to 'age' because it is a read-only property.

export { }
