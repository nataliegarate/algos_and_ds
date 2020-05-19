let integerDivide = function (x, y) {
  let count = 0;
  let sum = 0;
  let activated = false;
  while (sum < x) {
    sum += y;
    count += 1;
    activated = true;
  }
  if (sum > x) {
    return count - 1;
  }
  return count;
};

// x divided by y
// 7 % 2

console.log(integerDivide(40, 4));
