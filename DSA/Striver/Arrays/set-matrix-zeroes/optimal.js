var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let col0 = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                // mark 0th col for hashing row
                matrix[i][0] = 0;
                // mark 0th row for hashing col
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
        }
    }
    if (matrix[0][0] === 0) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};