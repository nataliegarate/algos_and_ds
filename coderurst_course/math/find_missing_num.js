let findMissing = function (input) {
  if (!input) {
    return -1;
  }
  let fullSum = findFullSum(input);
  let curSum = findRealSum(input);
  return fullSum - curSum;
};

function findFullSum(arr) {
  let n = arr.length + 1;
  let sum = 0;
  while (n) {
    sum += n;
    n--;
  }
  return sum;
}

function findRealSum(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
}

console.log(findMissing([3, 7, 1, 2, 8, 4, 5]));
