var fib = function (N, fibNums = {}) {
  if (N === 0) {
    return 0;
  }
  if (N === 1 || N === 2) {
    return 1;
  }
  if (fibNums[N]) {
    return fibNums[N];
  } else {
    return (fibNums[N] = fib(N - 1, fibNums) + fib(N - 2, fibNums));
  }
};
