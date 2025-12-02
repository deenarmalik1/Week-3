// An arrow function is a shorthand way to define a function in javascript, introduced in ES6(2015)

// Syntax:

const functionName = (parameters) => {
    // code to execute
};

// Example:

const greet = (name) => {
    console.log('Hello, ${name}!');
};

// Key Characteristics:

// 1. Concise: Arrow functions are shorter and more concise than traditional function expressions.
// 2. Anonymous: Arrow functions are always anonymous, meaning they do not have a name.
// 3. Lexical this: Arrow functions inherit the this context from their parent scope.

// Example Use Case:

const person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log('Hello. my name is ${this.name}!');
        }, 1000);
    }
};

person.greet(); // Hello, my name is John!

// Arrow function with single parameter:

const double = x => x * 2;
console.log(double(5)); // 10

// Arrow functions with No parameters:

const hello = () => console.log('Hello, World!');
hello(); // Hello, World!

// Arrow function with multiple parameters:

const sum = (a,b) => a + b;
console.log(sum(2, 3)); // 5

// Benefits:

// 1. Concise code: Arrow functions reduce boilerplate code and make functions more readable
// 2. Lexical this: Arrow functions inherit the this context,reducing the need for bind() or that = this hacks

// Arrow functions are not suitable for constructors,methods,or functions that require their own this context



        

        
    
