let arr = [2, 3, 6, 7];
function combinationSum(arr, target) {
    let res = [];
    let finArr = [];
    function sum(ind, target, res) {
        let curr = arr[ind];
        if (ind === arr.length) {
            if (target === 0) finArr.push([...res]);
            return;
        }
        if (curr <= target) {
            res.push(curr);
            sum(ind, target - curr, res);
            res.pop();
        };
        sum(ind + 1, target, res);
    }
    sum(0, target, res);
    console.log(finArr);
}

console.log(combinationSum(arr, 7));