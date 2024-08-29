let res = [];
let arr = [3, 1, 2];
let n = arr.length;
function printAllSubsequence(ind, res, arr, n) {
    if (ind === n) {
        console.log(res);
        return;
    }
    /** Not Take */
    printAllSubsequence(ind + 1, res, arr, n);
    res.push(arr[ind]);
    /** Take */
    printAllSubsequence(ind + 1, res, arr, n);
    res.pop();
}

printAllSubsequence(0, res, arr, n); 