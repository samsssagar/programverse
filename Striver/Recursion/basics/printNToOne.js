function oneToN(n) {
    if (n === 0) return;
    console.log(n);
    oneToN(n - 1);
}

// oneToN(10);

function print(n) {
    if (n === 0) return;
    console.log(n);
    print(n - 1);
}

print(10);