const arr = [4, 3, 2, 6, 1, 7, 2];
function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let p1 = low;
    let p2 = mid + 1;
    let temp = [];
    while (p2 <= high && p1 <= mid) {
        if (arr[p1] <= arr[p2]) {
            temp.push(arr[p1]);
            p1++;
        } else {
            temp.push(arr[p2]);
            p2++;
        }
    }
    while (p1 <= mid) {
        temp.push(arr[p1]);
        p1++;
    }
    while (p2 <= high) {
        temp.push(arr[p2]);
        p2++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

mergeSort(arr, 0, arr.length - 1);