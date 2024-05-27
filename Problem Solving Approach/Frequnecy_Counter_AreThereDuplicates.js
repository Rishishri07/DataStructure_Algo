/**
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

NOTE: In this approach, we create an empty object and set values as key and their occurance as value.
EX. {
    "a": 2,
    "b": 1,
    "c": 1
    }
    areThereDuplicates('a', 'b', 'c', 'a')
**/
function areThereDuplicates() { // ...args would also work to get n number of arguments
  
  if (arguments.length === 0) return false;
  
  let elementFreqCounter = {};
  for (let val of arguments) {
      elementFreqCounter[val] = (elementFreqCounter[val] || 0) + 1;
  }
    console.log(elementFreqCounter);
  
  for (let el in elementFreqCounter) {
      if (elementFreqCounter[el] > 1) return true;
  }
  
  return false;
    // console.log(arguments);
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicates()); // false