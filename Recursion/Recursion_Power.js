/**
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
**/

// function power(base, pow) {
    
//     let total = 1;

//     if (pow === 0) {
//         return 1;
//     }

//     function helper(pow) {
//         if (pow === 0) {
//         return total;
//     }
//         total = total * base;

//         helper(pow-1);
//     }
    
//     helper(pow);
//     return total;
// }

// Using Pure Recursion
function power(base, pow) {

    if (pow === 0) return 1;

    return base * power(base, pow-1);
}

power(3,3); // 27
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16