/*
 Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements
 if they are in the wrong order.
*/

function bubbleSort(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// Optimized for nearly sorted arrays [8,1,2,3,4,5,6,7]
function bubbleSort(arr) {

    let noSwaps; // added to optimize for nearly sorted arrays [8,1,2,3,4,5,6,7]
    for (let i = arr.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([5,3,4,1,2]);