function permutations(ds, map, nums, res) {
    if (ds.length === nums.length) {
        res.push([...ds]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!map[i]) {
            ds.push(nums[i]);
            map[i] = 1;
            permutations(ds, map, nums, res);
            ds.pop();
            map[i] = 0;
        }
    }
}

function permute(nums) {
    let arr = [];
    let ds = [];
    let map = [];
    permutations(ds, map, nums, arr);
    return arr;
}

console.log(permute([1, 2, 3]));