/**
 * Implement the JavaScript Array.includes function in the type system. A type takes the two arguments.
 * The output should be a boolean true or false.
 * e.g
 * type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
 */

type Includes<T extends any[], U> = U extends T[number] ? true : false;

type HasInert = Includes<['gold', 'argon', 'neon'], 'argon'>
