/**
 * Implement Replace<S, From, To> which replace the string From with To once in the given string S
 * e.g
 * type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
 */

// Type definition
type Replace<
    T extends string,
    ToBeReplaced extends string,
    ReplacedWith extends string
    > = ToBeReplaced extends ''
    ? T
    : T extends `${infer Head}${ToBeReplaced}${infer Tail}`
        ? `${Head}${ReplacedWith}${Tail}`
        : T


// test cases
type A0 = Replace<'Mayur is good', 'good', 'bad'> // Mayur is bad
type A1 = Replace<'foobar', 'foo', 'zoo'> // zoobar

export { }
