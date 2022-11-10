/**
 * Omit<T,K> - contructs a type by excluding K properties from type T
 * This is in converse with Pick<T,K>
 */

interface Student {
    name: string;
    age: number;
    year: number;
    isSophomore: boolean;
};

type Citizen = Omit<Student, 'year' | 'isSophomore'>

const person: Citizen = {
    name: 'Mayur',
    age: 26,
    // year: 2020 // this line should throw error
};

console.log(person);
export {}