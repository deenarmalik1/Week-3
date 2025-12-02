// A higher-order function is a function that takes another function as an argument or returns a function as its result.

// Characteristics:

// 1. Takes a function as an argument: A higher-order function takes another function as an argument
// 2. Returns a function: A higher-order function returns a function as its result.

// Examples:

// Takes a function as an argument
function callFunction(func) {
    func();
}

function greet() {
    console.log('Hello, World!');
}

callFunction(greet); // Hello, World!

// Returns a function
function createGreet() {
    return function() {
        console.log('Hello, World!');
    };
}

const greet2 = createGreet();
greet2();  // Hello, World!

// Common Higher-Order Functions:

// 1. map(): Applies a function to each element of an array
// 2. filter(): Creates a new array with elements that pass a test
// 3. reduce(): Applies a function to each element of an array, reducing it to a single value.

const numbers = [1, 2, 3, 4, 5];

// map()
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// filter()
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Benefits:

// 1. Abstraction: Higher-order functions enable abstraction, making code more reusable and modular.
// 2. Flexibility: Higher-order functions promote flexibility, allowing for dynamic and expressive code
// 3. Functional Programming: Higher-order functions are a fundamental concept in functional programming.

// Higher-order functions are a powerful tool in javascript, enabling developers to write concise, readable, and maintainable code.