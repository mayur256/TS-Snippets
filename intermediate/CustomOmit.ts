/**
 * Implement the built-in Omit<T, K> generic without using it.
 * Constructs a type by picking all properties from T and then removing K
 */

interface Todo {
    title: string
    description: string
    completed: boolean
}

type CustomOmit<X,Y> = Pick<X, Exclude<keyof X, Y>>

type SubTodo = CustomOmit<Todo, 'completed'>

const st:SubTodo = {
    title: 'Test',
    description: 'Test description',
    // completed: false // this line throws an error
}