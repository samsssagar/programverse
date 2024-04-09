function nthRow(row) {
    let res = 1;
    console.log(1);
    for (let i = 1; i <= row - 1; i++) {
        res = (res * ((row - i) / i));
        console.log(res);
    }
}

console.log(nthRow(5));