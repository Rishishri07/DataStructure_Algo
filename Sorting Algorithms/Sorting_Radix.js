/*
1. Write a function to count digits of the number.
2. Write a function to getDigit on kth position
    i.e 1234 0th position -> 4, 1st position -> 3
3. Write a function to get most digits count of the numbers present in list.
    [1234,5,13, 10100] -> 5
4. Start a loop till most digits
    a. Start inner loop till list length
    b. get the digit and store number it in the bucket array. 
5. Add numbers back to the original array from bucket array.
*/

function radixSort(nums) {
    let mostDigits = getMaxDigits(nums);

    for (let k = 0; k < mostDigits; k++) {
        let digitBucketArr = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBucketArr[digit].push(nums[i]);
        }
        nums = [].concat(...digitBucketArr);
    }
    return nums;
}
function getMaxDigits(nums) {
    let maxDigitsCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = getDigitCount(nums[i]);
        if (maxDigitsCount < temp) {
            maxDigitsCount = temp;
        }
    }
    return maxDigitsCount;
}

function getDigitCount(num) {
    let count = 0;
    while (num !== 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}

function getDigit(num, place) {
    let digit = 0;
    for (let i = 0; i <= place; i++) {
        digit = Math.trunc(num%10);
        num = Math.trunc(num/10);
    }
    return digit;
}

radixSort([23,345,5467,12,2345,9852,5])

// function radixSort(nums) {
//     let maxDigitsCount = mostDigit(nums);
    
//     for (let k = 0; k < maxDigitsCount; k++) {
//         // Create array bucket for 10 subarrays
//         let digitBucketArr = Array.from({length: 10}, () => []);
//         for (let i = 0; i < nums.length; i++) {
//             let digit = getDigit(nums[i], k);
//             digitBucketArr[digit].push(nums[i]);
//         }
//         console.log(digitBucketArr);
//         nums = [].concat(...digitBucketArr);
//     }
//     return nums;
// }
// function getDigit(num, place) {
//     let digit = 0;
//     for (let i = 0; i <= place; i++) {
//         digit = Math.floor(num % 10);
//         num = Math.trunc(num / 10);
//     }
//     // Math.abs() To handle negative numbers, instead of -1 it should return 1.
//     return Math.abs(digit);
    
//     // Alternate solution
//     // return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
// }

// function digitCount(num) {
//     if (num === 0) return 1;
//     let digitCount = 0;
//     num = Math.abs(num);
//     while (num > 0) {
//         digitCount++;
//         num = Math.floor(num / 10);
//     }
//     // Math.abs() To handle negative numbers, instead of -1 it should return 1.
//     return digitCount;
// }

// function mostDigit(nums) {
//     let maxDigits = 0;
//     nums.forEach(num => {
//         let temp = digitCount(num);
//         if (temp > maxDigits) {
//             maxDigits = temp;
//         }
//     });
//     return maxDigits;
// }


// radixSort([1234,5,13, 10100])
// radixSort([23,345,5467,12,2345,9852,5])
