/**
 * Implement your own version of flat function, that flattens an array of an arbitrary level of nesting
 * Start with functional approach and them move on the OOPS approach in your implementation
 */

// JS Built in flat
const nestedArr = [1, 2, [3, [4, 5]], [6, [7, 8, [9, 10]]]];
// console.log(nestedArr.flat(Infinity))

// Functional approach
function flattenArray(targetArr: Array<any>, depth: number = 1) {
    const resultArr: Array<any> = [];
    let levelCount = 1;

    function _flattenArray(targetArr: Array<any>) {
        for (const item of targetArr) {
            if (Array.isArray(item) && levelCount <= depth) {
                levelCount += 1;
                _flattenArray(item);
            } else {
                resultArr.push(item)
            }
        }
    }
    _flattenArray(targetArr);

    return resultArr;
}
/* const flattened = flattenArray(nestedArr, 1);
const bflattened = nestedArr.flat(1); // built in
console.log({ nestedArr, flattened, bflattened }) */

// OOPS approach
interface Array<T> {
    flattenArrayOOPS<A extends any[], D extends number>(this: A, depth: D): any
}

Array.prototype.flattenArrayOOPS = function(depth: number) {
    const resultArr: Array<any> = [];
    let levelCount = 1;

    function _flattenArray(targetArr: Array<any>) {
        for (const item of targetArr) {
            if (Array.isArray(item) && levelCount <= depth) {
                levelCount += 1;
                _flattenArray(item);
            } else {
                resultArr.push(item)
            }
        }
    }
    _flattenArray(this);

    return resultArr;
}
const flattened = nestedArr.flattenArrayOOPS(Infinity)
console.log({ nestedArr, flattened })