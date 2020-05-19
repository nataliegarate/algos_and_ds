let removeDuplicates = function (str) {
  let letters = new Set();
  let arr = str.split("");
  let numOfRepeats = 0;
  for (let i = 0; i < arr.length; i++) {
    if (letters.has(arr[i])) {
      numOfRepeats++;
    } else {
      letters.add(arr[i]);
      arr[i - numOfRepeats] = arr[i];
    }
  }
  while (numOfRepeats) {
    arr.pop();
    numOfRepeats--;
  }

  return arr.join("");
};

console.log(removeDuplicates("nnaattw"));
