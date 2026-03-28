"use strict";
// Function Return Value Types
function add(a, b) {
    return a + b;
}
add(10, 9);
// add("5", 10)
// Special Type `void` - return nothing
// Function doesn't return a meaningful value, but it does finish
function log(message) {
    console.log(message);
}
log("Malunggay Pandesal");
// Another Special Type `never`
// Function never finishes normally (throws error, infinite loop)
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// Function as Types
// Useful for callback functions
// () => {} is not same as () => void
// () => {} - arrow function
// () => void - function type
function performJob(cb) {
    // ...
    cb('Job Application!');
}
let logMsg = (msg) => {
    console.log(msg);
};
performJob(logMsg);
let anotherUser = {
    name: "Mark",
    age: 21,
    // greet: function() {
    //     return this.name
    // }
    greet() {
        console.log(`Hello, ${this.name} ${this.age}`);
        return this.name;
    }
};
anotherUser.greet();
