var maxProfit = function (prices) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        let bought = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            let sold = prices[j];
            let profit = sold - bought;
            if (profit > max && profit > 0) max = profit;
        }
    }
    return max < 0 ? 0 : max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));