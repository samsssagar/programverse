function maxSubarray(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < nums.length; j++) {
        let sum = 0;
        for (let k = j; k < nums.length; k++) {
            sum += nums[k];
            max = Math.max(sum, max);
        }
    }
    return max;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));