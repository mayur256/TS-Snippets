/**
 * Pick<T,K> - contructs a type by selecting only K properties from type T
 */

interface Student {
    name: string;
    age: number;
    year: number;
    isSophomore: boolean;
}

type Person = Pick<Student, 'name' | 'age'>;

const person: Person = {
    name: 'Mayur',
    age: 26,
    // year: 2020 // this line should throw error
};

console.log(person);

export default {}