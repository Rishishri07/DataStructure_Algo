/** Write a recursive function called capitalizeWords. Given an array of words,
return a new array containing each word capitalized.
**/

function capitalizeWords (arr) {
  let newArr = [];
    if (arr.length === 0) return [];

    newArr.push(arr[0].toUpperCase());
    newArr = newArr.concat(capitalizeWords(arr.slice(1)));

    return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']