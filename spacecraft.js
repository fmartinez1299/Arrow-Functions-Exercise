/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
};

// Test the function
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => "No lifeforms detected";

// Print the result of calling `scanForLife`
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = () => ({ x: 100, y: 200, z: 300 });

// Print the returned object from `currentCoordinates`
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    receiveMessage: (message) => {
        console.log("Message received: " + message);
    }
};

// Directly call `receiveMessage`
spacecraft.receiveMessage("All systems go!");

// Observations:
/*
 * Arrow functions do not have their own `this`. 
 * In the context of an object method, `this` does not refer to the object itself (in this case, `spacecraft`).
 * Instead, `this` is lexically bound, meaning it retains the value of `this` from the enclosing scope where the function is defined.
 * As a result, if you try to access `this` inside `receiveMessage`, it will not refer to the `spacecraft` object.
 * For methods where you want `this` to refer to the object, it's better to use regular function syntax.
 */

