// Type conversion is the process of converting a value from one datatype to another.

// Implicit Type Conversion:

// Implicit type conversion occurs when javascript automatically converts a value from one typr to another

// Examples:

console.log(5 + 'hello'); // '5hello' (number to String)
console.log(true + 1); // 2 (boolean to number)
console.log(null + 1); // 1 (null to number)
console.log(undefined + 1); // NaN (undefined to number)

// Explicit Type Conversion:

// Explicit type conversion occurs when you manually convert a value from one type to another using functions or operators

// Examples:

// String conversion:

console.log(String(123)); // '123'
console.log((123).toString()); // '123'

// Number conversion

console.log(Number('123')); // 123
console.log(parseInt('123')); // 123
console.log(parseFloat('123.45')); // 123.45

// Boolean Conversion:

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(!!'hello'); // true

// COMMON TYPE CONVERSION FUNCTIONS:

// * String():converts to string
// * Number():converts to number
// * parseInt():converts to integer
// * parseFloat():converts to floating-point  number

// For best practices we should use explicit type conversion to avoid unexpected behaviour, Use Number() or parseInt(), parseFloat() for numeric conversions
// Use Boolean() or !! for boolean conversions and Use String() or .toString() for string conversions 