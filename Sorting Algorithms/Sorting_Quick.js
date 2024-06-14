/* QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as
a pivot and partitions the given array around the picked pivot by placing the pivot in its correct
position in the sorted array.
*/

function pivotHelper(arr, start=0, end=arr.length+1) {
    let pivot = arr[start];
    let swapIndex = start;

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (let i = start + 1; i < arr.length; i++) { // 3 swap 3
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, swapIndex, start);
    console.log(arr);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIdx = pivotHelper(arr, left, right);

        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
quickSort([4,8,2,1,5,7,6,3])

// function pivotHelper(arr, start=0, end=arr.length+1) {

//     function swap(arr, i, j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     let currentPivot = arr[start];
//     let swapIndex = start;

//     for (let i = start+1; i < arr.length; i++) {
//         if (arr[i] < currentPivot) {
//             swapIndex++;
//             swap(arr, swapIndex, i);
//             console.log(arr);
//         }
//     }
//     swap(arr, start, swapIndex);
//     // console.log(arr);
//     return swapIndex;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {

//     if (left < right) {
//         let pivotIdx = pivotHelper(arr, left, right);
//         // Passing array before pivot value
//         quickSort(arr, left, pivotIdx - 1);
//         // Passing array after pivot value
//         quickSort(arr, pivotIdx+1, right);
//     }
//     return arr;
// }