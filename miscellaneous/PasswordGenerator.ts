/**
 * Create a password generator using generateSequence
 */
import { generateSequence } from "./BasicGenerator";

const DIGIT = { START: 48, END: 57 };
const UPPER = { START: 65, END: 90 };
const LOWER = { START: 97, END: 122 };

// generates a sequence of characters that can be used to create passwords
function* passwordGenerator() {
    // generate ascii codes for digits
    yield* generateSequence(DIGIT.START, DIGIT.END);

    // generates ascii codes for uppercase letters
    yield* generateSequence(UPPER.START, UPPER.END);

    // generates ascii codes for lowercase letters
    yield* generateSequence(LOWER.START, LOWER.END);
};

const codes = passwordGenerator();
let str = '';
for (const code of codes) {
    str += String.fromCharCode(code);
};

console.log(str);

export { };
