// An anonymous function is a function that is defined without a name.

// Example: 

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num);
});

// Key Characteristics:

// 1. No Name: Anonymous functions do not have a name.
// 2. Defined Inline: Anonymous functions are typically defined inline,as part of a larger expression
// 3. Assigned to a variable: Anonymous functions can be assigned to a variable or passed as an argument to another function.

// Example Use case:

const greet = function(name) {
    console.log('Hello, ${name}!');
};

greet('John'); // Hello, John!

// Benefits:

// 1. Concise Code: Anonymous functions reduce boilerplte code and make functions more readable.
// 2. flexibility: Anonymous functions can be used as callbacks,event handlers, or assigned to variables.
