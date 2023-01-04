
// Iterable - as it implements Symbol.iterator
// Iterator - as it implements next method
const alphabetIterator = {
    start: 65, // ASCII for A
    end: 90, // ASCII for Z

    // makes this object iterable
    [Symbol.iterator]: function (): any {
        return this;
    },

    next(): { done: boolean, value?: any } {
        if (this.start <= this.end) {
            return { done: false, value: String.fromCharCode(this.start++) };
        }

        return { done: true };
    }
}

for (const alphabet of alphabetIterator) {
    console.log(alphabet);
}

export { }
