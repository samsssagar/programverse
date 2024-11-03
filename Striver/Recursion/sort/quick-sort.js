let arr = [4, 6, 2, 5, 7, 9, 1, 3];

function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = findPivotAndPlace(arr, low, high);
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}

function findPivotAndPlace(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) i++;
        while (arr[j] > pivot && j >= low + 1) j--;
        if (i < j) swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

quickSort(arr, 0, 7);
console.log(arr); 