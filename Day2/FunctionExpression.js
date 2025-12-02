// A Function expression is a way to define a function and assign it to a variable

// Syntax:
const variableName = function(parameters) {
    // code to execute
};

// Example: 

const greet = function(name) {
    console.log('Hello, ${name}!');
};

// Key Characteristics:

// *1. Not Hoisted: Function expressions are not hoisted, meaning they must be declared before they are called.
// *2. Anonymous: Function expressions can be anonymous, meaning they do not require a name.
// *3. Assigned to a variable: Function expressions are assigned to a variable, which is used to reference the function

// Example Use case:

const Greet = function(name) {
    console.log('Hello, ${name}!');
};

Greet('John') // Hello, John!

