let count = 0;
function print() {
    if (count === 5) return;
    console.log("Sameer");
    count++;
    print();
}

print();