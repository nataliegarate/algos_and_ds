function triangle(num1, num2) {
  if (num2 === 1 || num1 === num2) {
    return 1;
  }
  return triangle(num1 - 1, num2 - 1) + triangle(num1 - 1, num2);
}

console.log(triangle(3, 2));
