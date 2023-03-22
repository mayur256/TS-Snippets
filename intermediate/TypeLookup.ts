/**
 * get the corresponding type by searching for the common type field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.
 * interface Cat {
 * type: 'cat'
 * breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
 * }
 * 
 * interface Dog {
 * type: 'dog'
 * breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
 * color: 'brown' | 'white' | 'black'
 * }
 * 
 * type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
 */

type LookUp <
    X extends { type: PropertyKey },
    T extends PropertyKey
    > = { [Y in T]: X extends { type: T } ? X : never }[T]

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}


type MyDogType = LookUp<Cat | Dog, 'dog'>

export { }
