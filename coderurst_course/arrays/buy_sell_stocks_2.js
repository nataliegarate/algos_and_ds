let arr1 = [8, 5, 12, 9, 19, 1];
let arr2 = [21, 12, 11, 9, 6, 3];

let findBuySellStockPrices = function (arr) {
  let lowest = Infinity;
  let highestProfit = -Infinity;
  let bestBuy;
  let bestSell;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - lowest > highestProfit) {
      highestProfit = arr[i] - lowest;
      bestBuy = lowest;
      bestSell = arr[i];
    }
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
    console.log(highestProfit);
  }
  return [bestBuy, bestSell];
};
console.log(findBuySellStockPrices(arr2));
console.log(findBuySellStockPrices(arr1));
