// Optional Values in parameter
// function generateError(msg?: string) {
//     throw new Error(msg)
// }

// generateError("An error occured"); // Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
// // generateError()


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'student' | 'guess'
    }

    let user: User = {
        name: 'Mark',
        age: 21
    }

    user.name
    user.age
})

// Nullish Coalescing `??` operator 
let input = false
const didProvideInput = input || false;

console.log(didProvideInput)

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.