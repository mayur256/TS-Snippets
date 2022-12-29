const asyncRangeIterator = {
    start: 1,
    end: 5,

    [Symbol.asyncIterator](): any {
        return this;
    },

    async next(): Promise<{ done: boolean, value?: any }> {
        if (this.start <= this.end) {
            return await new Promise(resolve => setTimeout(() => {
                resolve({ done: false, value: this.start++ });
            }, 1000));
        } else {
            return await new Promise(resolve => setTimeout(() => {
                resolve({ done: true });
            }, 1000));
        }
    }
};

// Iterate over async iterator with for await
(async () => {
    for await (const num of asyncRangeIterator) {
        console.log(num);
    }
})();

export {}