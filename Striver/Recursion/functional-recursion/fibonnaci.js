function fib(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else {
        let last = fib(n - 1); // 1
        let sLast = fib(n - 2); // 1
        return last + sLast;
    }
}

for (let i = 0; i < 6; i++) {
    console.log(fib(i));
}