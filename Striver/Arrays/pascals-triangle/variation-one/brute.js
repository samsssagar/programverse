// Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

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

console.log(ncr(5, 3));