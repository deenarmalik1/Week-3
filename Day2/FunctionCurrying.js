// Function currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

// Example:

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = (a) => (b) => (c) => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6

// How it Works:

// 1. The curriedAdd function takes the first argument and returns a new function
// 2. The returned function takes the second argument b and returns another new function
// 3. The second returned function takes the third argument c and returns the result of a + b + c

// Benefits: 

// 1. Partial Application: Currying enables partial application of functions, making it easier to reuse code.
// 2. Improved Readability: Currying can improve code readability, making it easier to understand complex function calls.
// 3. Flexibility: Currying Provides flexibility in function composition and reuse.

// Example Use case:

const addTax = (taxRate) => (price) => price + (price * taxRate);
const add10PercentTax = addTax(0.1);

console.log(add10PercentTax(100)); // 110

// Implementing Currying:

function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

const add = (a, b, c) => a + b + c;
const CurriedAdd = curry(add);

console.log(CurriedAdd(1)(2)(3)); // 6
console.log(CurriedAdd(1, 2)(3)); // 6
console.log(CurriedAdd(1),(2, 3)); // 6

// Function Currying is a Powerful technique in javascript, enabling developers to write concise, readable, and maintainable code. 

