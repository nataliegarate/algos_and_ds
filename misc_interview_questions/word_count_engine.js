function wordCountEngine(document) {
  let dict = {};
  document = document.toLowerCase();
  let curWord = "";
  for (let i = 0; i < document.length; i++) {
    if (document[i].match(/[a-z]/i)) {
      curWord += document[i];
    }
    if (document[i] === " " || i === document.length - 1) {
      if (curWord.length > 0) {
        if (dict[curWord]) {
          dict[curWord].count += 1;
        } else {
          dict[curWord] = {};
          dict[curWord].count = 1;
          dict[curWord].firstIdx = i;
        }
        curWord = "";
      }
    }
  }
  let arr = [];
  for (let key in dict) {
    arr.push([key, dict[key]["count"].toString(), dict[key]["firstIdx"]]);
  }
  //if you want something to come after something, return 1
  // else return -1
  // (note if same usually would return 0, in this case we do further comparision)
  arr = arr.sort(function (a, b) {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else {
      if (a[2] < b[2]) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  arr.forEach((arr) => arr.pop());

  return arr;
}

//ALT USING JAVASCRIPT MAPS- because they store items in insertion order

function wordCountEngine(document) {
  let dict = new Map();
  document = document.toLowerCase();
  let curWord = "";
  for (let i = 0; i < document.length; i++) {
    if (document[i].match(/[a-z]/i)) {
      curWord += document[i];
    }
    if (document[i] === " " || i === document.length - 1) {
      if (curWord.length > 0) {
        dict.has(curWord)
          ? dict.set(curWord, dict.get(curWord) + 1)
          : dict.set(curWord, 1);
        curWord = "";
      }
    }
  }

  let arr = [];
  for (let i = 0; i < dict.size - 1; i++) {
    arr.push([]);
  }
  for (let [x, y] of dict) {
    arr[y].push([x, y.toString()]);
  }
  let returnArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0) {
      for (let j = 0; j < arr[i].length; j++) {
        returnArr.push(arr[i][j]);
      }
    }
  }
  return returnArr;
}
