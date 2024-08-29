function mergeIntervals(intervals) {
    let arr = [];
    sort(intervals);
    for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        if (arr.length && end <= arr[arr.length - 1][1]) continue;
        for (let j = i + 1; j < intervals.length; j++) {
            if (end >= intervals[j][0]) {
                end = Math.max(intervals[j][1], end);
            } else {
                break;
            }
        }
        arr.push([start, end]);
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