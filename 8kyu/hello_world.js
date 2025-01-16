// DESCRIPTION:
//
//     Make a simple function called greet that returns the most-famous "hello world!".

// SOLUTION 1 simple:

// function greet() {
//     return "hello world!";
// }

// SOLUTION 2 creative:

function greet() {
    return String.fromCharCode(104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33);
}

console.log(greet());