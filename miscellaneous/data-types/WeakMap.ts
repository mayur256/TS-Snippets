/**
 * WeakMap is a data-structure that is similar to Map with following differences
 * 1. It can have only objects as key and not prmitives.
 * 2. It discards the object once al of it's other references are removed
 * 3. It has not interation functionality and hence lacks methods like keys, values, etc
 * For e.g
 * With weakmap we can implement an optimal caching functionality as ilustrated below
 */

// Cache definition
const cacheWeakMap = new WeakMap();

function cachify(argObj: any) {

    if (!cacheWeakMap.get(argObj)) {
        const result = argObj;
        cacheWeakMap.set(argObj, result);
    }

    return cacheWeakMap.get(argObj);
}

// Cache usage
const car = { name: 'Audi' };
const cachedResult = cachify(car); // first call will cachify it
const cachedResult2 = cachify(car) // will return the cachified result