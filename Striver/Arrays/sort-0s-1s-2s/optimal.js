function sort(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(nums, mid, low);
            mid++;
            low++;
        }
        else if (nums[mid] === 1) mid++;
        else {
            swap(nums, mid, high);
            high--;
        }
    }
    return nums;
}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log(sort([2, 0, 2, 1, 1, 0]));