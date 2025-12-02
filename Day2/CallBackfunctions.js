// A callback function is a function that is passed as an argument to another function, which is then executed by the outer function

// Syntax:

function outerFunction(callback) {
    // code to execute
    callback();
}

function callbackFunction() {
    // code to execute
}

outerFunction(callbackFunction);

// Examples:

function greet(name, callback) {
    console.log('Hello, ${name}!');
    callback();
}

function sayGoodMorning() {
    console.log('GoodMorning!');
}

greet('john', sayGoodMorning);
// output:
// Hello, john!
// GoodMorning

// Key Characteristics:

// 1. Passed as an argument: Callback functions are passed as an argument to another function
// 2. Executed by the Outer Function: Call back functions are executed by the outer function
// 3. Asynchronous: call back functions are often used for asynchronous operations, such as handling events or making API requests

//Example Use case:

setTimeout(function() {
    console.log('Hello, World!');
}, 2000);

// Benefits:

// 1. Asynchronous Programming: Callback functions enable asynchronous programming, allowing for non-blocking coding executions
// 2. Modular Code: Call back functions promote modular code, making it easier to reuse and maintain code.
// 3. Flexibility: Callback functions can be used for a wide range of applications, including event handling and API requests

// Common Use Cases:

// 1. Event handling: Callback functions are used to handle events, such as clicks, mouseovers, and keyboard input.
// 2. API requests: Callback functions are used to handle API requests, such as fetching data from a server
// 3. Timeouts and intervals: Callback functions are used to execute code after a specufied time or interval

//  Callback functions need to manage properly , for this consider using promises or async/await syntax.