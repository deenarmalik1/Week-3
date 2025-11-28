// Falsy values are values that evaluate to false in a boolean context.

// Here are the 7 falsy values in Javascript

// 1. false:the boolean false value
// 2. 0: the number zero
// 3. ''(empty string):an empty string
// 4. null:the null value
// 5. undefined:the undefined value
// 6. NaN:Not a Number(a special numeric value)
// 7. 0n:BigInt zero(introduced in ES11)

// Examples:

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean)(0n); // false