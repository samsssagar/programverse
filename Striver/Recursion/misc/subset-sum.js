function subsetSum(arr) {
    let final = [];
    function subset(ind, sum) {
        if (ind === arr.length) {
            final.push(sum);
            return;
        }
        sum += arr[ind];
        subset(ind + 1, sum);
        sum -= arr[ind];
        subset(ind + 1, sum);
    }
    subset(0, 0);
    return final.sort((a, b) => a - b);
}

console.log(subsetSum([3, 1, 2]));

/**
 * 0
 * 3
 * 1
 * 4
 * 3,1
 * 3,4
 * 1,4
 * 3,1,4
 */