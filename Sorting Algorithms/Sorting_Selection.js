/*
Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest
(or largest) element from the from the unsorted portion of the list and moving it to the sorted portion of
the list.
*/
function selectionSort(arr) {

    // let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        let smallestNumIdx = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[smallestNumIdx] > arr[j]) {
                smallestNumIdx = j;
            }
        }

        // if the minimum is not the index you initially began with, swap two values
        if (i !== smallestNumIdx) {
            let temp = arr[i];
            arr[i] = arr[smallestNumIdx];
            arr[smallestNumIdx] = temp;   
        }
    }
    return arr;
}

selectionSort([0,2,34,22,10,19,17]);