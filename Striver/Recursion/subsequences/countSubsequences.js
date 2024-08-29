let res = [];
let arr = [3, 1, 2];
let n = arr.length;
let currSum = 0;
let sum = 3;

function countSubsequences(ind, res, arr, currSum) {
    /**
     * Case only for positive elements in the array
     * If the currSum is greater than sum
     */
    if (currSum > sum) return 0;
    if (ind === n) {
        if (currSum === sum) return 1;
        else return 0;
    }
    res.push(arr[ind]);
    currSum += arr[ind];
    let l = countSubsequences(ind + 1, res, arr, currSum)
    currSum -= arr[ind];
    res.pop();
    let r = countSubsequences(ind + 1, res, arr, currSum);
    return l + r;
}

console.log(countSubsequences(0, res, arr, currSum));