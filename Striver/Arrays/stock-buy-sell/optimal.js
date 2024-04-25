var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        let current = prices[i];
        if (min > current) min = current;
        let currProfit = current - min;
        if (currProfit > profit) profit = currProfit;
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));