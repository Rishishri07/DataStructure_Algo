/**
    Implement a fn called countUniqueValues, which accepts a sorted array, and counts the unique values in
    the array. There can be negative numbers in the array, but it will always be sorted.

    NOTE: In this approach we start i from the starting of an array (0) & j from next index (1).
    If we find an unique element i will be replaced value present at index j and i & j will be moved to
    next element.
    Also, it only works with sorted array.
**/
function countUniqueValues(arr) {

    if (arr.length === 0) return 0;
    
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

countUniqueValues([1,1,1,1,1,2]);