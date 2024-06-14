/*
Merge sort is a sorting algorithm that follows the divide-and-conquer approach.
It works by recursively dividing the input array into smaller subarrays and sorting those subarrays
then merging them back together to obtain the sorted array.

In simple terms, we can say that the process of merge sort is to divide the array into two halves,
sort each half, and then merge the sorted halves back together. This process is repeated until the entire
array is sorted.
*/

// Write merge function first to sort 2 arrays & merge them.

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            mergedArr.push(arr2[j]);
            j++;
        } else {
            mergedArr.push(arr1[i]);
            mergedArr.push(arr2[j]);
            j++;
            i++;
        }
    }

    // Below logic is to add remaining elements of the other array when the smaller array is added.
        while (i < arr1.length) {
            mergedArr.push(arr1[i]);
            i++;
        }

        while (j < arr2.length) {
            mergedArr.push(arr2[j]);
            j++;
        }
    return mergedArr;
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr;
    // arr = [4,8,3,20]
    let mid = Math.floor(arr.length/2);
    // arr = [4,8] -> [4], [8]
    let left = mergeSort(arr.slice(0, mid));
    // arr = [3,20] -> [3], [20]
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([4,8,3,20,100,90,2,1]);
// merge([3,4],[8,20])