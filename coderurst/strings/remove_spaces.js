// Remove White Spaces from a String

let removeWhiteSpaces = function (s) {
  let numOfSpaces = 0;
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      numOfSpaces++;
    } else {
      arr[i - numOfSpaces] = arr[i];
    }
  }
  while (numOfSpaces) {
    arr.pop();
    numOfSpaces--;
  }
  return arr.join("");
};

console.log(removeWhiteSpaces("n a t a l"));
