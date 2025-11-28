// Javascript Operators :

// Arithmetic Operators:

//  +:Addition
//  -:Subtraction
//  *:Multiplication
//  /:Division
//  %:Modulus
//  **:Exponentation
//  ++:Increment
//  --:Decrement

// Example:

let x = 5;
let y = 2;
console.log(x + y); // 7
console.log(x * y); // 10
console.log(x % y); // 1

// Comparison Operators:

// ==:Equal to(loose equality)
// ===:Strictly equal to(Strict equality)
// !=:Not equal to
// !==:Strictly Not equal to
// >:Greater than
// <:Less than
// >=:Greater than or equal to
// <=:Less than or equal to

// Example:

let z = 5;
let w = '5';
console.log(z == w); // true (loose equality)
console.log(z === w); // false (Strict equality)

// Logical Operators:

// &&: Logical AND
// ||: Logical OR
// ! : Logical NOT

// Example:

let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// Ternary Operator:

// condition ? valueIfTrue : valueIfFalse
// Example:

let c = 5;
let d = c > 10 ?'greater':'lesser';
console.log(d); // 'lesser'

// Typeof Operator

// * typeof value

// Example:

console.log(typeof 'hello'); // 'String'
console.log(typeof 123); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); 'object'

// Nullish Coalescing Operator(??)

// value ?? defaultValue

// Example:

let e = null;
let f = e ?? 'default';
console.log(f); // 'default'

let g = 0;
let h = g ?? 'default';
console.log(h); // 0 (because 0 is not null or undefined)

// Difference between || and ??:

// ||: Returns the first truthy Value
// ??: Returns the first value if it is not null or undefined

// Example:

let i = 0;
let j = i || 'default';
console.log(j); // 'default' (because 0 is falsy)

let k = 0;
let l = k ?? 'default';
console.log(l); // 0 (because 0 is not null or undefined)

// Difference between == and ===:

// ==: Loose equality(converts types)
// ===: Strict equality (no type conversion)

// Example:

let m = 5;
let n = '5';
console.log(m == n); // true (loose equality)
console.log(m === n); // false (strict equality)

