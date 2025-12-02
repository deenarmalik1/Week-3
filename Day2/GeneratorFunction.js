// A generator function is a special type of function that can be paused and resumed during execution, allowing for asynchronous programming and efficient handling of iterative tasks.

// Characteristics:

// 1. Defined with *: Generator functions are defined using the * symbol after the function keyword.
// 2. Uses yield: Generator functions use the yield keyword to pause execution and return a value.
// 3. Returns an Iterator: Generator functions return an iterator object, which can be used to iterate over the yielded values.

// Example:

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    yield '!';

}

const generator = generatorFunction();

console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: '!', done: false }
console.log(generator.next()); // { value: undefined, done: true }

// How it works:

// 1. The generator function is called, and execution begins
// 2. When a yield statement is encountered, execution is paused, and the yielded value is returned.
// 3. The iterator's next() method is called, which resumes execution of the generator function.
// 4. Steps 2-3 are repeated until the generator function completes.

// Benefits:

// 1. Efficient Memory Usage: Generator functions use less memory, as they only store the current state.
// 2. Asynchronous Programming: Generator functions enable aynchronous programming, making it easier to handle tasks like API requests.
// 3. Improve Readability: Generator functions can improve code readability, making it easier to understand and complex logic.

// Common Use Cases:

// 1. Iterating over Large Datasets: Generator functions are useful for iterating over large datasets, reducing memory usage.
// 2. Asynchronous Programming: Generator functions are used for asynchronous programming, making it easier to handle tasks like API requests.
// 3. Creating iterators: Generator functions can be used to create custom iterators for objects.

//     Generator functions are powerful tool in javascript, enebling developers to write efficient, Readable and maintainable code..