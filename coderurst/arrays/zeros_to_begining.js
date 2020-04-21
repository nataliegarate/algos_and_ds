let moveZerosToLeft = function (A) {
  let numOfZeros = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 0) {
      numOfZeros++;
    } else {
      A[i + numOfZeros] = A[i];
    }
    console.log(A);
  }
  for (let j = 0; j < numOfZeros; j++) {
    A[j] = 0;
  }
  return A;
};
console.log(moveZerosToLeft([1, 10, -1, 11, 5, 0, -7, 0, 25, -35]));
