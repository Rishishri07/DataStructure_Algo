/**
Write a function called SameNum, which accepts 2 arrays.
The function should return true if every value in the array has it's corresponding value squared in the 2nd
array. The frequency must be the same.

NOTE: In this approach, we create an empty object and set values as key and their occurance as value.
EX. {
    "a": 2,
    "b": 1,
    "c": 1
    }
    areThereDuplicates('a', 'b', 'c', 'a')
**/

function sameNum(arr1, arr2) {
    
    if (arr1.length !== arr2.length) return false;
    
    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let arr of arr1) {
        freqCounter1[arr] = (freqCounter1[arr] || 0) + 1;
    }

    for (let arr of arr2) {
        freqCounter2[arr] = (freqCounter2[arr] || 0) + 1;
    }
    console.log(freqCounter1);
    console.log(freqCounter2);

    for (let freqKey in freqCounter1) {
        if (!(freqKey**2 in freqCounter2)) {
            return false;
        }
        // console.log('freqKey', freqKey);
        // console.log(freqCounter2[freqKey ** 2] + ':' + freqCounter1[freqKey])
        if (freqCounter2[freqKey ** 2] !== freqCounter1[freqKey]) {
            return false;
        }
    }

    return true;
}

sameNum([9,4,2,2], [16,4,81,4]);