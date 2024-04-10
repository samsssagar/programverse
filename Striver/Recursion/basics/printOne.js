let count = 0;
function printOne() {
    if (count < 4) {
        console.log(1);
        count++;
        printOne();
    }
}

printOne();