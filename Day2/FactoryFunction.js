// A factory function is a function that returns an object, typically used to create and manage objects without exposing the underlying logic.

// Characteristics:

// 1. Returns an object: A factory function returns an object.
// 2. Encapsulates logic: A factory function encapsulates the logic for creating and managing objects.
// 3. No new Keyword: Factory functions do not use the new keyword to create objects

// Example:

function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log('Hello, my name is ${this.name} and I am ${this.age} years old.');
       },
    };
}

const person1 = createPerson('john', 30);
person1.greet(); // Hello, my name is john and I am 30 years old.

const person2 = createPerson('jane', 25);
person2.greet(); // Hello, my name is jane and I am 25 years old.

// Benefits:

// 1. Encapsulation: Factory functions encapsulate the logic for creating and managing objects.
// 2. Flexibility: Factory functions promote flexibility, allowing for different types of objects to be created
// 3. Reusability: Factory functions enable reusability, reducing code duplication.

// Common Use Cases:

// 1. Object Creation: Factory functions are used to create objects with complex logic.
// 2. API design: Factory functions are used to design APIs that return objects.
// 3. Testing: Factory functions are used to create test objects with specific properties

//    Factory functions are a powerful tool in Javascript, enabling developers to write concise,readable, and maintainable code..