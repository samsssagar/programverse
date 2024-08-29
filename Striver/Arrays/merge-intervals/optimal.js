function mergeIntervals(intervals) {
    let arr = [];
    sort(intervals);
    for (let i = 0; i < intervals.length; i++) {
        if (!arr.length || arr[arr.length - 1][1] < intervals[i][0]) {
            arr.push(intervals[i]);
        } else {
            arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], intervals[i][1])
        }
    }
    return arr;
}

function sort(arr) {
    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
}

console.log(mergeIntervals([[1, 3], [2, 4], [2, 6], [8, 9], [8, 10], [9, 11], [15, 18], [16, 17]]));