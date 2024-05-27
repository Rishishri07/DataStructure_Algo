/**
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Also, it only works with sorted array.

NOTE: In this approach, we create an empty object and set values as key and their occurance as value.
EX. {
    "a": 2,
    "b": 1,
    "c": 1
    }
    areThereDuplicates('a', 'b', 'c', 'a')
**/
function areThereDuplicates(...args) { // ...args would also work to get n number of arguments
  
  if (args.length === 0) return false;
    args.sort();

    // arguments.sort();
    let i = 0;
   for (let j = 1; j < args.length; j++) { // 0, 1
       console.log('args[i]', i, args[i]);
       console.log('args[j]', j, args[j]);
       // console.log('Equal', args[i] === args[j]);
       if (args[i] === args[j]) {
           return true;
       }
       i++;
   }
  
  return false;
    // console.log(arguments);
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
// console.log(areThereDuplicates()); // false