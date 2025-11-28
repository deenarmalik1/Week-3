// NON PRIMITIVE DATATYPES:

// These are complex datatypes that can store multiple values or objects

// 1. Object: represents a collection of key-value pairs, eg, { name: 'John', age: 30 }
// 2. Array: represents a collection of values, eg, [1, 2, 3]
// 3. Function: represents a block of code that can be executed, eg, function foo() { ... }
// 4. Date: represents a date and time
// 5. RegExp: represents a regular expression pattern

// Key differences between Primitive datatypes and nonprimitive datatypes :

// * Primitive datatypes are passed by value, while non primitive datatypes are passed by reference
// * Primitive datatypes are immutable,while non-primitive datatypes are mutable

// eg:

let num = 10; // Primitive
let obj = { name: 'John' }; // Non-Primitive

num = 20; // creates a new value
obj.name = 'Jane'; // modifies the original object