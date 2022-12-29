const asyncRangeIterator = {
    start: 1,
    end: 5,

    [Symbol.asyncIterator]() {
        return this;
    },

    async next() {
        if (this.start <= this.end) {
            await new Promise(resolve => setTimeout(() => {
                resolve({ done: false, value: this.start++ });
            }, 1000));
        } else {
            await new Promise(resolve => setTimeout(() => {
                resolve({ done: true });
            }, 1000));
        }
    }
}
