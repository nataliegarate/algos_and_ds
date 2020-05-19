const example = [
  ["x", "x", "x", "x", "x", "o"],
  ["x", "o", "o", "o", "o", "x"],
  ["x", "x", "x", "x", "x", "x"],
  ["x", "o", "x", "x", "o", "x"],
  ["x", "x", "x", "x", "o", "x"],
];

const expected = [
  ["x", "x", "x", "x", "x", "o"],
  ["x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", "o", "x"],
  ["x", "x", "x", "x", "o", "x"],
];

function flip(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "o") {
        let queue = [{ i: i, j: j }];
        let toBeChanged = [{ i: i, j: j }];
        let shouldBeChangedBack = false;
        while (queue.length > 0) {
          let current = queue.shift();
          let curI = current.i;
          let curJ = current.j;
          if (
            !arr[curI + 1] ||
            !arr[curI + 1][curJ] ||
            !arr[curI - 1] ||
            !arr[curI - 1][curJ] ||
            !arr[curI][curJ - 1] ||
            !arr[curI][curJ + 1]
          ) {
            shouldBeChangedBack = true;
            break;
          }
          arr[curI][curJ] = "x";

          if (arr[curI][curJ - 1] === "o") {
            queue.push({ i: curI, j: curJ - 1 });
            toBeChanged.push({ i: curI, j: curJ - 1 });
            arr[curI][curJ - 1] = "x";
          }
          if (arr[curI][curJ + 1] === "o") {
            queue.push({ i: curI, j: curJ + 1 });
            toBeChanged.push({ i: curI, j: curJ + 1 });
            arr[curI][curJ + 1] = "x";
          }
          if (arr[curI + 1] && arr[curI + 1][curJ] === "o") {
            queue.push({ i: curI + 1, j: curJ });
            toBeChanged.push({ i: curI + 1, j: curJ });
            arr[curI + 1][curJ] = "x";
          }
          if (arr[curI - 1] && arr[curI - 1][curJ] === "o") {
            queue.push({ i: curI - 1, j: curJ });
            toBeChanged.push({ i: curI - 1, j: curJ });
            arr[curI - 1][curJ] = "x";
          }
        }
        if (shouldBeChangedBack) {
          console.log("changing back");
          for (let k = 0; k < toBeChanged.length; k++) {
            arr[toBeChanged[k].i][toBeChanged[k].j] = "o";
          }
        }
      }
    }
  }
  return arr;
}

console.log(flip(example));
