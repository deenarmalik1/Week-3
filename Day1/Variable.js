//Variable:
// A variable is a named storage location in memory that holds a value.Just like a labelled box where we can store value.

// In javascript, We can declare variables using :
// * let:block-scoped,can be reassigned
// * const:block-scoped,cannot be reassigned
// * var:function-scoped,can be reassigned (Old version)

//  VARIABLE REASSIGNMENT AND REDECLARATION:

// Reassignment: changing the value of a Variable
//eg:
let x = 10;
x = 20; // reassignment
// Redeclaration: declaring a variable with the same name origin
//eg:
//let y = 10;
//let y = 20;

// SCOPE:

// Scope refers to the region of the code where a variable is defined and accessible

// Global scope: Variables declared outside functions or blocks
// Functionscope: Variables declared inside functions(using var)
// Blockscope: Variables declared inside blocks (using let and const)

//For eg:

let globalVar = 'global';

function foo() {
    let functionVar = 'function';
    if (true) {
        let blockVar = 'block';
        console.log(globalVar); // accessible
        console.log(functionVar); // accessible
        console.log(blockVar); //accessible
    }
    console.log(blockVar); // error:not accessible
}

foo();
console.log(functionVar); // error: not accessible
