/**
 * Create a dictionary and implement a toString property within the dictionary
 * Add method dictionary.toString() into it, that should return a comma-delimited list of keys.
 * Your toString should not show up in for..in over the object.
 */

const dictionary = Object.create(null, {
    toString: {
        value: function () {
            return Object.keys(this).join()
        }
    }
});

// Adding some properties for demonstration
dictionary.fruit = "mango";
dictionary.__proto__ = "Some prototype";

for (const key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString());
