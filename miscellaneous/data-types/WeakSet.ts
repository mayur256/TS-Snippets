/**
 * The WeakSet is analoguous to Set with following exceptions
 * 1. It can have only objects as key and not prmitives.
 * 2. It discards the object once al of it's other references are removed
 * 3. It has not interation functionality and hence lacks methods like keys, values, etc
 */

const user = { name: "Adam" };
const wSet = new WeakSet();
wSet.add(user);
console.log(wSet.has(user));

/**
 * Imagine there's an application with different scripts.
 * One Script is responsible for creating the messages and another script consumes those messages.
 * Now the second script reads the messages by adding them to a WeakSet.
 * Observe the effect on WeakSet, after the mess
 */

// Messges defined in first script
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

// Consume the messages in second script
const readMsg = new WeakSet();
readMsg.add(messages[0]); // read first message
readMsg.add(messages[1]) // read another message

// confirm that a few messages are read
// console.log({ msgIsRead: readMsg.has(messages[0]) });

// The first script now deletes a message
messages.shift();

// now check for the deleted message in second script
// Expected the second script should now clean the reference to the read message
// now readMsg has 1 element (technically memory may be cleaned later)
console.log({ msgIsRead: readMsg.has(messages[0]) });
