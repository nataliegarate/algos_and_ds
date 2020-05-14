let power = function (x, n) {
  //TODO: Write - Your - Code
  if (n === 0) {
    return 1;
  }
  n = Math.floor(n);
  if (n === 1) {
    return x;
  }
  if (n === -1) {
    return 1 / x;
  }
  let result = power(x, n / 2);
  console.log(result);
  console.log("n", n);
  if (n % 2 === 0) {
    result = result * result;
  } else {
    result = result * result * x;
  }
  return result;
};

console.log(power(5, 5));
