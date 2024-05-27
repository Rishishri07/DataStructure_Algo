/** Write a function called isSubsequence which takes in two strings and checks whether the characters
in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere
in the second string, without their order changing.
**/

function isSubsequence(inputString, expectedString) {
  if (!inputString || !expectedString) return false;

   let i = 0;

    for (let j = 0; j < expectedString.length; j++) {
        if (inputString[i] === expectedString[j]) {
            i++;
        }
    }

    if (i === inputString.length) {
        return true;
    } else return false;
    
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
 console.log(isSubsequence('abc', 'acb')); // false (order matters)