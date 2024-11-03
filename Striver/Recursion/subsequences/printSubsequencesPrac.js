let arr = [1, 1, 2], res = [], final = [], sum = 0, finalSum = 2;
function print(index, res, sum) {
    if (index >= arr.length) {
        if (sum === finalSum) {
            final.push([...res]);
        }
        sum = 0;
        return;
    }
    res.push(arr[index]);
    sum += arr[index];
    print(index + 1, res, sum);
    sum -= res.pop();
    print(index + 1, res, sum);
}

print(0, res, sum); // 3
console.log(final);