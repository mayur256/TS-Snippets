/**
 * Implement a generic Exlude<T, K> that excludes properties mutual in T and K
 * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 */

type CustomExclude<T, K> = T extends K ? never : T;

type One = 'alpha' | 'beta' | 'gamma';

type Two = 'alpha';

type Result = CustomExclude<One, Two>; // 'beta' | 'gamma'
