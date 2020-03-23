function findStart(target1, arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start + 1 < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target1) {
      return mid;
    } else if (arr[mid] < target1) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (arr[start] === target1) {
    return start;
  } else if (arr[end] === target1) {
    return end;
  }
  return start;
}

function produceMissingNums(start, arrStart, end, arrEnd, arr) {
  let intervals = [];
  let lastNum;
  if (start < arr[arrStart]) {
    let first = start;
    let last = start;

    while (last + 1 < arr[arrStart]) {
      last++;
    }
    last === first ? intervals.push(first) : intervals.push(first + "-" + last);
    lastNum = last;
  }

  for (let i = arrStart; i < arrEnd + 1; i++) {
    if (arr[i] > end) {
      break;
    }
    if (arr[i] - 1 === lastNum || lastNum === undefined) {
      lastNum = arr[i];
    } else {
      firstNum = lastNum + 1;
      nextNum = lastNum + 1;
      while (arr[i] - 1 !== nextNum) {
        nextNum++;
      }
      nextNum === firstNum
        ? intervals.push(firstNum)
        : intervals.push(firstNum + "-" + nextNum);
      lastNum = nextNum;
    }
    lastNum = arr[i];
  }

  if (lastNum < end) {
    first = lastNum + 1;
    while (lastNum < end) {
      lastNum++;
    }
    lastNum === first
      ? intervals.push(first)
      : intervals.push(first + "-" + lastNum);
  }
  return intervals;
}

function together(start, end, arr) {
  let startIdx = findStart(start, arr);
  let endIdx = findStart(end, arr);
  return produceMissingNums(start, startIdx, end, endIdx, arr);
}

console.log(together(5, 12, [1, 3, 5, 7, 8, 9, 13]));
console.log(together(1, 5, [1, 3, 5, 7, 8, 9, 13]));
console.log(together(10, 13, [1, 3, 5, 7, 8, 9, 13]));
console.log(together(-5, 17, [1, 3, 5, 7, 8, 9, 13]));
