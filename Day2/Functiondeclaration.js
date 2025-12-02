// A Function dclaration is a statement that defines a function with a specified name,parameters and body.

// Syntax:
function functionName(parameters){
    // code to execute
}

// Example: 

function greet (name) {
    console.log('Hello, ${name}');
}

// Key Characteristics:

// *1. Hoisted: Function declarations are hoisted to the top of the scope, meaning they can be called before they are declared.

// *2. Named: Function declarations require a name, which is used to reference the function

// *3. Block-scoped: Function declarations are scoped to the block they are declared in.

// Example use case:

greet('John'); // Hello, John!

function greet(name) {
    console.log('Hello, ${name}!');
}

