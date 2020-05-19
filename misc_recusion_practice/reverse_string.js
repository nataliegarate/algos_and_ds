var reverseString = function (s, num1 = 0, num2 = s.length - 1) {
  if (num1 > num2) {
    return;
  }
  [s[num1], s[num2]] = [s[num2], s[num1]];
  return reverseString(s, num1 + 1, num2 - 1);
};
