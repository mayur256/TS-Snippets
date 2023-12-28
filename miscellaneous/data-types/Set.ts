/**
 * A Set is a special collection in JS that stores unique values of any type both primitive and object.
 * Like Map, Set also retains the insertion order of their values.
 * Any subsequent call to add elements in set is ignored except the first one.
 * The objective of using Set data type in favor of normal objects is quick retrieval.
 */

const participants = new Set();

const Peter = { name: 'Peter' };
const Luke = { name: 'Luke' };
const Paul = {name: 'Paul'};

participants.add(Peter);
participants.add(Luke);
participants.add(Paul);
participants.add(Paul); // does nothing, get ignored as no duplicate entries allowed

console.table(participants);

/** Sets in JS also supports a few methods that are analoguous to mathematical operatiions */
// For e.g the union method works on a Set and accepts set-like arguments

const set1 = new Set([1, 2, 3]);
const setLike = new Map([
    [1, "one"],
    [2, "two"],
    [4, "four"]
]);

// console.log(set1.union(setLike)) // only supports in safari browsers at the moment


export {}
