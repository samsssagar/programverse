let res = [];
let arr = [3, 1, 2];
let n = arr.length;
let currSum = 0;
let sum = 0;

function printSum(ind, res, arr, currSum) {
    if (ind === arr.length) {
        if (currSum === sum) {
            console.log(res);
            return true;
        }
        else return false;
    }
    res.push(arr[ind]);
    currSum += arr[ind];
    if (printSum(ind + 1, res, arr, currSum) === true) return true;
    currSum -= arr[ind];
    res.pop();
    if (printSum(ind + 1, res, arr, currSum) === true) return true;
    return false;
}

printSum(0, res, arr, currSum);