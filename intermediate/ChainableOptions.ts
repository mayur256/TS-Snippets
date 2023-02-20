/**
 * Implement a type Chainable that has two functions option(key, value) and get() such that
 * 
 * declare const config: Chainable
    const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

    // expect the type of result to be:
    interface Result {
        foo: number
        name: string
        bar: {
            value: string
        }
    }
 */

type Chainable<T = {}> = {
    option<K extends PropertyKey, V>(
        key: K extends keyof T ? V extends T[K] ? never : K : K,
        value: V
    ): Chainable<Omit<T, K> & Record<K, V>>,
    get(): T
};

declare const chainable: Chainable;

const a1 = chainable
    .option('foo', 123)
    .option('zoo', '456')
    .option('bar', { value: 'Milk bar' })
    .get();

export { };
