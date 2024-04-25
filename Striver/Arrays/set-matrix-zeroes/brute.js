var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                markRow(matrix, i, n);
                markCol(matrix, j, m);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1) matrix[i][j] = 0;
        }
    }
    return matrix;
};

function markRow(matrix, row, n) {
    for (let i = 0; i < n; i++) {
        matrix[row][i] = -1;
    }
}

function markCol(matrix, col, m) {
    for (let i = 0; i < m; i++) {
        matrix[i][col] = -1;
    }
}

console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))