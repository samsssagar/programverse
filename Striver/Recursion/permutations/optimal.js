function permute(arr) {
    let pointer = 0;
    let res = [];
    permutations(pointer, arr, res);
    return res;
}

function permutations(index, arr, res) {
    if (index === arr.length) {
        res.push([...arr]);
        return;
    }
    for (let i = index; i < arr.length; i++) {
        swap(i, index, arr);
        permutations(index + 1, arr, res);
        swap(i, index, arr);
    }
}

function swap(ind1, ind2, arr) {
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

console.log(permute([1, 2, 3]));