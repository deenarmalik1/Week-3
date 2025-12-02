
// Memoization is a technique used to optimize function calls by caching the results of expensive function calls and reusing them when the same inputs occur again.
// How it Works:

// 1. The function is called with a set of inputs.
// 2. The function checks if the result is already cached.
// 3. If the result is cached, it returns the cached result.
// 4. If the result is not cached, it calculates the result, caches it, and returns it.

// Example: 

function add(a, b) {
    console.log('Calculating...');
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Calculating... 5
console.log(memoizedAdd(2, 3)); // 5 (cached result)

// Implementing memoization:

function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = func(...args);
        cache[key] = result;
        return result;
    };
}

// Benefits:

// 1. Improved Performance: Memoization can significantly improve performance by avoiding redundant calculations.
// 2. Reduced Overhead: Memoization reduces the overhead of function calls and calculations.
// 3. Better Responsiveness: Memoization can improve the responsiveness of applications by reducing computation time.

// Common Use Cases:

// 1. Expensive Calculations: Memoization is useful for expensive calculations, such as data processing or scientific simulations.
// 2. API Calls: Memoization can be used to cache API responses, reducing the number of requests.
// 3. Recursive Functions: Memoization can be used to optimize recursive functions, reducing the number of recursive calls.

// Memoization is a powerful technique in JavaScript, enabling developers to write efficient and scalable code. However, it should be used judiciously, as it can increase memory usage if not implemented correctly.



