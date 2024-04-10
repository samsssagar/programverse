function pascalTriangle(numRows) {
    let arr = [[1]];
    for (let i = 2; i <= numRows; i++) {
        let res = 1;
        let resArr = [];
        resArr.push(1);
        for (let j = 1; j <= i - 1; j++) {
            res = (res * ((i - j) / j));
            resArr.push(res);
        }
        arr.push(resArr);
    }
    return arr;
}

console.log(pascalTriangle(5));