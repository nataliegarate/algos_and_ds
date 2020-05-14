let squareRoot = function (num) {
  let low = 1;
  let high = num;
  while (low < high) {
    let mid = (low + high) / 2;
    let possibleResult = mid * mid;
    let dif = Math.abs(possibleResult - num);
    if (dif <= 0.01) {
      return mid;
    }
    if (possibleResult < num) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return null;
};

console.log(squareRoot(17));
