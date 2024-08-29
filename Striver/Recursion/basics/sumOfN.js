// function sumOfN(n, sum) {
//     if (n === 0) {
//         console.log(sum);
//         return;
//     }
//     sumOfN(n - 1, sum + n);
// }

// sumOfN(5, 0);

function sumOfN(n) {
    if (n === 0) return 0;
    return n + sumOfN(n - 1);
}

console.log(sumOfN(5));