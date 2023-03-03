/**
 * Implements a basic async generator that can work with for await of
 */

async function* asyncSeqGenerator(start: number, end: number): any {
    for (let i = start; i <= end; i++) {
        yield await new Promise((resolve: any) => {
            setTimeout(() => resolve(i), 1000);
        });
    }
};

const asyncSeqResult: Generator = asyncSeqGenerator(1, 10);

(async () => {
    for await (const number of asyncSeqResult) {
        console.log(number);
    }
})();

export { };
