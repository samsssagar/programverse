function maxSubarray(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }
            if (max < sum) max = sum;
        }
    }
    return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));