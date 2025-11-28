// Loops are used to execute a block of code repeatedly for a specified number of times in javascript

// Types of Loops:

// 1. For Loop: for (initialization; condition; increment/decrement) { code to execute }
// 2. While Loop: while (condition) { code to execute }
// 3. Do-While Loop: do { code to execute } while (condition)
// 4. For-In Loop: for (variable in object) { code to execute }
// 5. For-OfLoop: for (variable of iterable) { code to execute }

// Examples:

// For Loop:

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// While-Loop:

let j = 0;
while (j < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}

// Do-While Loop:

let x = 0;
do {
    console.log(x); // 0, 1, 2, 3, 4
    x++;
} while (x < 5);

// For-In Loop

let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key); // 'a', 'b', 'c'
    }

    // For-Of Loop:

    let arr = [1, 2, 3];
    for (let value of arr) {
        console.log(value); // 1, 2, 3
    }

    // We should use for loops for simple iterations, while Loops for complex conditions, do-while Loops when you need to execute the code atleast once, for-in Loops for iterating over object properties, for-of loops for iterating over iterable objects..