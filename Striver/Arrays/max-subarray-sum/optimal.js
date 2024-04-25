function maxSubarray(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        sum += element;
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
}

console.log(maxSubarray([1]));