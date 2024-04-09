var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let rowsArr = new Array(m).fill(0);
    let colsArr = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowsArr[i] = 1;
                colsArr[j] = 1;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rowsArr[i] === 1 || colsArr[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};