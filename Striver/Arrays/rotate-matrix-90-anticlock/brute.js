var rotate = function (matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        let temp = [];
        for (let j = matrix.length - 1; j >= 0; j--) {
            temp.push(matrix[j][i]);
        }
        arr.push(temp);
    }
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i];
    }
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));