let isNumberValid = function (s) {
  if (!s.length) {
    return false;
  }
  let numOfDecimals = 0;
  let numAfterCurDecimal = true;
  let curDecimal = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ".") {
      numOfDecimals++;
      if (numOfDecimals > 1) {
        return false;
      }
      numAfterCurDecimal = false;
      curDecimal = true;
    } else if (s[i] === "-" && i !== 0) {
      return false;
    } else if (curDecimal && !numAfterCurDecimal & (s[i] !== ".")) {
      numAfterCurDecimal = true;
      curDecimal = false;
    }
  }
  if (!numOfDecimals) {
    return false;
  } else {
    return true;
  }
};

console.log(isNumberValid("4.3-25"));
