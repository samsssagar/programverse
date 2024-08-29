function oneToN(n) {
    if (n === 0) return;
    console.log(n);
    oneToN(n - 1);
}

oneToN(10);