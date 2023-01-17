/**
 * @param {number} start 
 * @param {number} end 
 * @desc - generator function that generates a range of numbers
 */
function* generateSequence(start: number, end: number): any {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const result: Generator = generateSequence(65, 65 + 26);

for (const num of result) {
    console.log(num);
}
