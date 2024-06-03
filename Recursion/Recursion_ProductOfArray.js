/** Write a function called productOfArray which takes in an array of numbers
and returns the product of them all. **/

// function productOfArray(arr) {
//     let total = 1;

//     if (arr.length === 0) {
//         return;
//     }

//     function helper(arr) {
//         if (arr.length === 0) {
//         return total;
//     }
//         let temp = arr[0];
//      total = total * temp;
//     helper(arr.splice(1));
//     }

//     helper(arr);
//     return total;
// }

// Using Pure Recursion
function productOfArray(arr) {
    let total = 1;

    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.splice(1));
}
// productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60