/**
Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)

NOTE: In this approach, we create an empty object and set values as key and their occurance as value.
EX. {
    "a": 2,
    "b": 1,
    "c": 1
    }
    areThereDuplicates('a', 'b', 'c', 'a')
**/

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
if (!num1 || !num2) return false;
  let num1Freq = {};
  let num2Freq = {};
  
  while(num1 > 0) {
      let temp;
      temp = num1%10;
      num1Freq[temp] = (num1Freq[temp] || 0) + 1;
      num1 =  Math.floor(num1/10);
  }

 while(num2 > 0) {
  let temp;
  temp = num2%10;
  num2Freq[temp] = (num2Freq[temp] || 0) + 1;
  num2 =  Math.floor(num2/10);
    }

    for (let num in num1Freq) {
        if (num1Freq[num] !== num2Freq[num]) return false;
    }
    return true;
}
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false