// DESCRIPTION:
//
//     Theoretical Material
//
// You are given two vectors starting from the origin (x=0, y=0) with coordinates (x1,y1) and (x2,y2). Your task is to find out if these vectors are collinear. Collinear vectors are vectors that lie on the same straight line. They can be directed in the same or opposite directions. One vector can be obtained from another by multiplying it by a certain number. In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear if (x1, y1) = (k*x2, k*y2) , where k is any number acting as a coefficient.

// Problem Description
//
// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

// Notes
//
// All vectors start from the origin (x=0, y=0).
//     Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid division by zero errors.
//     A vector with coordinates (0, 0) is collinear to all vectors.

//SOLUTUION 1:
// function collinearity(x1, y1, x2, y2) {
//     // Case 1: Both vectors are (0, 0)
//     if (x1 === 0 && y1 === 0 && x2 === 0 && y2 === 0) {
//         return true;
//     }
//
//     // Case 2: One of the vectors is (0, 0)
//     if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
//         return true;
//     }
//
//     // Case 3: Avoid division by zero and check collinearity using cross multiplication
//     return x1 * y2 === y1 * x2;
// }

//SOLUTION 2:
function collinearity( x1,y1, x2,y2 ) {


    return x1*y2===y1*x2
}

console.log(collinearity(1, 2, 2, 4)); // true (on the same line)
console.log(collinearity(1, 2, 3, 5)); // false (not collinear)
console.log(collinearity(0, 0, 5, 7)); // true (one vector is (0, 0))
console.log(collinearity(0, 0, 0, 0)); // true (both vectors are (0, 0))
console.log(collinearity(0, 2, 0, 4)); // true (vertical collinear vectors)
console.log(collinearity(3, 0, 6, 0)); // true (horizontal collinear vectors)