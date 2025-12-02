// JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location in the source code.

// Lexical Scope:

// 1. A variable's scope is determined by its location in the source code.
// 2. A variable is only accessible within its scope. 
// 3. Inner functions have access to the variables of their outer functions.

// Example: 

function outer() {
  const x = 10;

  function inner() {
    console.log(x); // 10
  }

  inner();
}

outer();

// Dynamic Scope:

// 1. A variable's scope is determined at runtime.
// 2. A variable is looked up in the current scope, and then in the caller's scope, and so on.

// Example(Not Applicable in Javascript)

function outer() {
  const x = 10;

  function inner() {
    console.log(x); // would print the value of x in the caller's scope
  }

  inner();
}

const x = 20;
outer(); // would print 20 in a dynamically scoped language

// Key differences:

// 1. Lexical scope is determined at compile-time, while dynamic scope is determined at runtime.
// 2. Lexical scope is generally more predictable and easier to understand, while dynamic scope can be more flexible but also more error-prone.

// JavaScript's Lexical Scope Rules:

// 1. A variable is looked up in the current scope.
// 2. If not found, it is looked up in the outer scope.
// 3. This process continues until the global scope is reached.
// 4. If the variable is not found in the global scope, it is considered undefined.

// Example:

// In this example, the inner function has access to the x variable in its outer scope, which is the outer function. The x variable in the global scope is not accessible within the inner function.
