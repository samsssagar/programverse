function sort(nums) {
    let countZero = 0;
    let countOne = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element === 0) countZero++;
        if (element === 1) countOne++;
    }
    for (let i = 0; i < countZero; i++) {
        nums[i] = 0;
    }
    for (let i = countZero; i < countZero + countOne; i++) {
        nums[i] = 1;
    }
    for (let i = countZero + countOne; i < nums.length; i++) {
        nums[i] = 2;
    }
    return nums;
}

console.log(sort([2, 0, 2, 1, 1, 0]));