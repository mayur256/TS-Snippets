/**
 * A Map is a keyed collection in JS like an Object, with exception of holding keys of any data type both primitives and objects.
 * A Map collection can only have unique keys. It overwrites the value if we try to enter a new value for the existing key
 * Map retains the order in which the keys are entered in the collection.
 */

const user = new Map();
user.set(0, 1);
user.set('name', 'John Doe');
user.set(true, false);

console.log({ size: user.size })
console.table(user);

// Map can also accept objects as their keys
// For e.g
const userObj = { name: "John Doe", id: 1 };
const userAuthentication = new Map();
userAuthentication.set(userObj, { isAuthenticated: true });
console.table(userAuthentication)
console.log(userAuthentication.get(userObj))

// Creating Map from objects
const fruitsPrice = {
    apple: 99,
    orange: '50',
    banana: 30
}
const fruitsMap = new Map(Object.entries(fruitsPrice));
console.table(fruitsMap);

// Creating Map from arrays
const vegetableMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
console.table(vegetableMap);

// Creating object from Map
/** Map has .entries method that returns an array of [key, value] pair */
const vegetableObj = Object.fromEntries(vegetableMap.entries())
console.table(vegetableObj);

// Creating array from Map
const vegetableArr = [...vegetableMap.entries()];
console.table(vegetableArr);

// Cloning Maps
const address = {
    city: { pincode: '396584', name: 'Surat' },
    state: 'Gujarat'
};
const original = new Map(Object.entries(address));
console.table(original);

const cloned = new Map(original);
console.table(cloned);

// Some identity checks
console.log("original === cloned", original === cloned);
console.log("original == cloned", original == cloned);
// this checks tells us that the data is in-fact not cloned deeply, but only shallowly
console.log("original.get('city') === cloned.get('city')", original.get('city') === cloned.get('city'));
console.log("original.get('city') === address.city", original.get('city') === address.city);

export {}