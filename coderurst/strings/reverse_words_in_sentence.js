//reverse whole sentence
// then reverse each string inside

let reverseWords = function (sentence) {
  sentence = sentence.split("");
  let reversedSentence = doReverse(0, sentence.length - 1, sentence);
  let firstLetter = null;
  let lastLetter = null;
  for (let i = 0; i < reversedSentence.length; i++) {
    if (firstLetter === null && reversedSentence[i] !== " ") {
      firstLetter = i;
    }
    if (
      (lastLetter === null &&
        reversedSentence[i] !== " " &&
        reversedSentence[i + 1] === " ") ||
      i === reversedSentence.length - 1
    ) {
      lastLetter = i;
      doReverse(firstLetter, lastLetter, reversedSentence);
      firstLetter = null;
      lastLetter = null;
    }
  }
  return reversedSentence.join("");
};

function doReverse(start, end, arr) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseWords("hello cool cat"));
