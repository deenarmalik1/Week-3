// A first-class function is a function that is treated as a value, just like any other variable in javascript

// Characteristics:

// 1. Assigned to a Variable: A function can be assigned to a variable
// 2. Passed as an argument: A function can be passed as an argument to another function
// 3. Returned from a function: A function can be returned from another function
// 4. Stored in a data Structure: A function can be stored in an array or object

// Example:

// Assigned to a variable
const greet = function(name) {
    console.log('Hello, ${name}!');
};

// Passed as an argument
function callFunction(func) {
    func('john');
}

callFunction(greet); // Hello, john!

// Returned from a function
function createGreet() {
    return function(name) {
        console.log('Hello, ${name}!');
    };
}

const greet2 = createGreet();
greet2('jane'); // Hello, jane!

// Stored in a data Structure
const functions = [
    function() { console.log('Function 1'); },
    function() { console.log('Function 2'); },
];

functions[0](); // Function 1
functions[1](); // Function 2

// Benefits:

// 1. Flexibility: First-class functions enable flexible and dynamic Programming.
// 2. Modular Code: First-class functions promote modular code, making it easier to reuse and maintain code
// 3. Functional Programming: First-class Functions are a fundamental concept in functional programming

//   Javascript is a language that supports first-class functions, which makes it popular choice for functional programming