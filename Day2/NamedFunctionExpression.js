// A named function expression is a function expression that has a name.

// Syntax:

const variableName = function functionName(parameters) {
    // code to execute
}

// Example:

const greet = function greet(name) {
    console.log('Hello, ${name}!');
};

// Key Characteristics:

// 1. Named: Named function expressions have a name, which can be used for debugging and recursion.
// 2. Assigned to a variable: Named function expressions are assigned to a variable, which is used to reference the function.
// 3. Not Hoisted: Named function expressions are not hoisted, meaning they must be declared before they are called

// Example use case:

const factorial = function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

console.log(factorial(5)); // 120

// Benefits:

// 1. Debugging: Named function expressions provide a name for the functions, making it easier to debug
// 2. Recursion: Named function expressions can be used for recursive functions, where the function calls itself
// 3. Readability: Named function expressions can improve code readability by providing a clear name for the function