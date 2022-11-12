/**
 * Standard Readonly utility type of typescript 
 */

interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: "Delete inactive users",
};

// todo.title = "Hello"; // throws error

/**
 * Implement the built-in Readonly<T> generic without using it.
 */

type CustomReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

interface Person{
    name: string;
    age: number;
}

const readonlyPerson: CustomReadonly<Person> = {
    name: 'Mayur',
    age: 26
}

// readonlyPerson.age = 30; // throws error
export default {}