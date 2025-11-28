// Conditional Statements in javascript are used to execute different blocks of codes based on certain conditions.

// if Statement:

// if (condition) { code to execute }

// Example:

let x = 5;
if (x > 10) {
    console.log('x is greater than 10');
}

// if-else Statement:

// if (condition) { code to execute } else { code to execute }

// Example:

let y = 5;
if (y > 10) {
    console.log('y is greater than 10');
} else {
    console.log('y is less than or equal to 10');
}

// if-Else-if Statement:

// if (condition) { code to execute } else if (condition 2) { code to execute } else { code to execute }

// Example:

let z = 5;
if (z > 10) {
    console.log('z is greater than 10');
} else if (z === 5) {
    console.log('z is equal to 5');
} else {
    console.log('z is less than 5');
}

// Switch Statement:

// switch (expression) { case value 1: code to execute; break; case value 2: code to execute; break; default: code to execute }

// Example :

let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Today is Monday');
    break;
    case 'Tuesday':
        console.log('Today is Tuesday');
    break;
    default: 
        console.log('Today is not Monday or Tuesday');
}

// Ternary Operator:

// condition ? valueIfTrue : valueIfFalse

// Example:

let a = 5;
let b = a > 10 ? 'greater' : 'lesser';
console.log(b); // lesser

// We should use if-else statements for simple conditions, use switch statements for multiple conditions with a single expression, use ternary operators for simple conditional assignments