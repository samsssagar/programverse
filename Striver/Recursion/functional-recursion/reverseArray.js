/**
 * Parameterised recursion
 */
let arr = [1, 2, 3, 4, 2];
let left = 0;
let right = arr.length - 1;

function swap(left, right, arr) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}


function reverse(l, r) {
    if (l >= r) return;
    swap(l, r, arr);
    reverse(l + 1, r - 1);
}
// reverse(0, arr.length - 1);
// console.log(arr);

/**
 * Functional recursion
 */
function reverseArr(i) {
    if (i >= Math.abs(arr.length / 2)) {
        return;
    }
    swap(i, arr.length - i - 1, arr);
    reverseArr(i + 1);
}

reverseArr(0);
console.log(arr);