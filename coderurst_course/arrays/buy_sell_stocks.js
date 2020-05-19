//[8, 6]

let findBuySellStockPrices = function (array) {
  let low = array[0];
  let highest = array[1];
  let highestProfit = highest - low;
  for (let i = 1; i < array.length; i++) {
    console.log(array[i] - low);
    if (highestProfit < array[i] - low) {
      console.log("here");
      highestProfit = array[i] - low;
      highest = array[i];
    }
    if (array[i] < low) {
      low = array[i];
    }
  }
  //ensures you get the other number associated with highest profit, because otherwise lowest might have been updated
  return [highest - highestProfit, highest]; //Return a tuple with (high, low) price values
};

console.log(findBuySellStockPrices([8, 6, 5, 4, 3, 2, 1]));
// console.log(findBuySellStockPrices([1, 2, 3, 4, 3, 2, 1, 2, 5]));
