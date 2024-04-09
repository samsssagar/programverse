function pascalTriangle(row) {
    let arr = [];
    for (let i = 1; i <= row; i++) {
        let tempArr = [];
        for (let j = 1; j <= i; j++) {
            tempArr.push(ncr(i, j));
        }
        arr.push(tempArr);
    }
    return arr;
}

function ncr(row, col) {
    // row = 5
    // col = 3
    let res = 1;
    for (let i = 0; i < col - 1; i++) {
        let n = row - 1;
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}

console.log(pascalTriangle(6))