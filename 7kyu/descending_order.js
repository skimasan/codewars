// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
//     Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// SOLUTION#1:
// function descendingOrder(n){
//     return parseInt(n.toString().split('').sort((a, b) => b - a).join(''), 10);
// }

// SOLUTION#2:
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(42145));      // Вывод: 54421
console.log(descendingOrder(145263));     // Вывод: 654321
console.log(descendingOrder(123456789));  // Вывод: 987654321