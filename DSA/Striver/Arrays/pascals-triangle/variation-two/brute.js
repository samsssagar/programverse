function nthRow(rowNum) {
    for (let i = 1; i <= rowNum; i++) {
        console.log(ncr(rowNum, i))
    }
}

function ncr(rowNum, col) {
    // row = 5
    // col = 3
    let res = 1;
    for (let i = 0; i < col - 1; i++) {
        let n = rowNum - 1;
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}

console.log(nthRow(6))